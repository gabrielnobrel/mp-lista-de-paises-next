import { CountryDetailDTO } from "@/types/country";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const CountryDetail = ({ data }: { data: CountryDetailDTO[] }) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1F2937]">
          {data[0].name.common}
        </h1>
      </div>

      <Link href="/" className="flex items-center gap-1">
        <ArrowLeft size={14} />
        Voltar
      </Link>

      <h1 className="text-2xl font-bold">{data[0].capital}</h1>
      <h1 className="text-2xl font-bold">{data[0].subregion}</h1>
      <h1 className="text-2xl font-bold">{data[0].population}</h1>
      <h1 className="text-2xl font-bold">
        {Object.values(data[0].languages).join(", ")}
      </h1>
      <h1 className="text-2xl font-bold">{data[0].flags.svg}</h1>
    </>
  );
};

export default CountryDetail;
