import { CountryListDTO } from "@/types/country";
import Image from "next/image";

const CountriesBorders = ({ borders }: { borders: CountryListDTO[] }) => {
  return (
    <>
      <h3 className="text-2xl font-semibold">Países que fazem fronteira</h3>

      <div className="mt-2 flex gap-4 overflow-x-auto">
        {borders &&
          borders.map((border) => (
            <Image
              key={border.name.common}
              src={border.flags.svg}
              alt={`Bandeira do país vizinho ${border.name.common}`}
              width={200}
              height={80}
              loading="eager"
            />
          ))}
      </div>
    </>
  );
};

export default CountriesBorders;
