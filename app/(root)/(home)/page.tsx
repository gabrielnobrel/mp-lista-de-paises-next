import CountryCard from "@/components/country-card";
import { getCountries } from "@/data-access/get-countries";

const Home = async () => {
  const countries = await getCountries();

  return (
    <>
      <section className="container w-full rounded-xl">
        <CountryCard data={countries} />
      </section>
    </>
  );
};

export default Home;
