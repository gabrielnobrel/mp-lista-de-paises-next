import type { CountryDetailsResult } from "@/lib/utils/country-details";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

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

      <Card className="flex flex-col items-center gap-8 p-6 md:flex-row md:justify-between">
        <div className="flex w-full flex-col gap-2">
          {data.map((detail) => (
            <div key={detail.label} className="flex flex-wrap items-center gap-2">
              {detail.icon}

              <span className="font-bold">{detail.label}:</span>

              {detail.type === "badge" ? (
                <Badge variant="default">{detail.value}</Badge>
              ) : (
                detail.value
              )}
            </div>
          ))}
        </div>

        <Image
          src={flag}
          alt={`Flag of ${country}`}
          width={275}
          height={459}
          className="w-full rounded-xl object-cover md:w-68.75"
          loading="eager"
        />
      </Card>
    </>
  );
};

export default CountryDetails;
