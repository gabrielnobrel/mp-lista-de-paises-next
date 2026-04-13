import CountryDetail from "@/components/country-detail";
import { getCountryByName } from "@/data-access/get-countries";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Country = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const country = await getCountryByName(id);

  const COUNTRY_DETAILS = [
    {
      label: "Capital",
      value: country[0].capital,
      icon: "🏙️",
    },
    {
      label: "Continente",
      value: country[0].subregion,
      icon: "🗺️",
    },
    {
      label: "População",
      value: country[0].population,
      icon: "👥",
    },
    {
      label: "Línguas faladas",
      value: Object.values(country[0].languages).join(", "),
      icon: "💬",
    },
  ];

  return (
    <>
      <section className="container w-full rounded-xl">
        <CountryDetail data={country} />
      </section>
    </>
  );
};

export default Country;
