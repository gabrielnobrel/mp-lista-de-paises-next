import CountryCard from "@/components/country-card";
import Search from "@/components/search";
import { getCountries } from "@/data-access/get-countries";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) => {
  const { search } = await searchParams;
  const countries = await getCountries();

  const filtered = search?.trim()
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase()),
      )
    : countries;

  return (
    <>
      <section className="container w-full rounded-xl">
        <Search />
        <div className="mt-4">
          <CountryCard data={filtered} />
        </div>
      </section>
    </>
  );
};

export default Home;
