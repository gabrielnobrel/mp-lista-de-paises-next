import { getCountries } from "@/data-access/get-countries";

const Home = async () => {
  const countries = await getCountries();

  return <div>{JSON.stringify(countries)}</div>;
};

export default Home;
