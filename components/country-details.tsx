import type { CountryDetailsResult } from "@/lib/utils/country-details";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";

const CountryDetails = ({
  details: { country, flag, data },
}: {
  details: CountryDetailsResult;
}) => {
  return (
    <>
      <h1 className="text-title-lg text-title text-center font-bold">
        {country}
      </h1>

      <Link href="/" className="text-title-sm flex items-center gap-2">
        <ArrowLeft size={14} /> Voltar
      </Link>

      <Card className="flex-row items-center justify-between gap-8 p-6">
        <div className="flex flex-col gap-2">
          {data.map((detail) => (
            <div key={detail.label} className="flex items-center gap-2">
              {detail.icon}
              <span className="font-bold">{detail.label}:</span>

              {detail.value}
            </div>
          ))}
        </div>

        <Image
          src={flag}
          alt={`Flag of ${country}`}
          width={275}
          height={459}
          className="rounded-xl object-cover"
        />
      </Card>
    </>
  );
};

export default CountryDetails;
