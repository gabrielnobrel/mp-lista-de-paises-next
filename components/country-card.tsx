import { CountryListDTO } from "@/types/country";
import Link from "next/link";
import Image from "next/image";

const CountryCard = ({ data }: { data: CountryListDTO[] }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {data.map((country) => (
          <Link
            href={`/country/${country.names.common}`}
            key={country.names.common}
            className="rounded-xl border-2 bg-white p-2"
          >
            <div className="relative h-20 w-full overflow-hidden rounded-xl p-2">
              <Image
                src={country.flag?.url_svg || "/images/flag-placeholder.svg"}
                alt={`Flag of ${country.names.common}`}
                fill
                className="object-cover"
                loading="eager"
              />
            </div>
            <h1 className="mt-2 text-center">{country.names.common ?? "-"}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CountryCard;
