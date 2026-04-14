import CountriesBorders from "@/components/countries-borders";
import CountryDetails from "@/components/country-details";
import {
  getBordersCountry,
  getCountryByName,
} from "@/data-access/get-countries";
import { buildCountryDetails } from "@/lib/utils/country-details";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Detalhes do País",
};

const Country = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const country = await getCountryByName(id);

  if (!country) {
    notFound();
  }

  const details = buildCountryDetails(country[0]);
  const borders = country[0].borders?.length
    ? await getBordersCountry(country[0].borders)
    : [];

  return (
    <>
      <section className="container w-full rounded-xl">
        <CountryDetails details={details} />
      </section>

      {borders.length > 0 && (
        <section className="mt-2">
          <CountriesBorders borders={borders} />
        </section>
      )}
    </>
  );
};

export default Country;
