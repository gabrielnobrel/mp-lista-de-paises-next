import { getCountries } from "@/data-access/get-countries";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const countries = await getCountries();

  return (
    <>
      <section className="container grid w-full grid-cols-5 gap-2 rounded-xl">
        {countries.map((country) => (
          <Link
            href={`/country/${country.name.common}`}
            key={country.name.common}
            className="rounded-xl border-2 bg-white p-2"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-xl p-2">
              <Image
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-2 text-center">{country.name.common ?? "-"}</h2>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
