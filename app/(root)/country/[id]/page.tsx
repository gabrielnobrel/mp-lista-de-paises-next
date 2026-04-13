import { getCountryByName } from "@/data-access/get-countries";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Country = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const country = await getCountryByName(id);

  return (
    <>
      <section className="container w-full rounded-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1F2937]">
            {country[0].name.common}
          </h1>
        </div>

        <Link href="/" className="flex items-center gap-1">
          <ArrowLeft size={14} />
          Voltar
        </Link>

        <h1 className="text-2xl font-bold">{country[0].capital}</h1>
        <h1 className="text-2xl font-bold">{country[0].subregion}</h1>
        <h1 className="text-2xl font-bold">{country[0].population}</h1>
        <h1 className="text-2xl font-bold">
          {Object.values(country[0].languages).join(", ")}
        </h1>
        <h1 className="text-2xl font-bold">{country[0].flags.svg}</h1>
      </section>
    </>
  );
};

export default Country;
