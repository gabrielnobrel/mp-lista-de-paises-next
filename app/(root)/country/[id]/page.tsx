import CountryDetails from "@/components/country-details";
import { getCountryByName } from "@/data-access/get-countries";
import { buildCountryDetails } from "@/lib/utils/country-details";

const Country = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const country = await getCountryByName(id);
  const details = buildCountryDetails(country[0]);

  return (
    <>
      <section className="container w-full rounded-xl">
        <CountryDetails details={details} />
      </section>
    </>
  );
};

export default Country;
