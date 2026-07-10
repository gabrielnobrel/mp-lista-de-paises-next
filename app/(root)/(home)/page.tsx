import { redirect } from "next/navigation";
import CountryCard from "@/components/country-card";
import { PaginationIconsOnly } from "@/components/pagination";
import Search from "@/components/search";
import { getCountries } from "@/data-access/get-countries";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    limit?: string;
    pretty?: string;
    page?: string;
  }>;
}) => {
  const { q, limit, pretty, page } = await searchParams;

  // inserir na URL ao carregar o sistema
  if (!limit || !pretty) {
    const params = new URLSearchParams();
    params.set("limit", limit ?? "25");
    params.set("pretty", pretty ?? "1");
    params.set("page", page ?? "1");
    redirect(`/?${params.toString()}`);
  }

  // inserir na query
  const pageSize = Number(limit) || 25;
  const currentPage = Number(page) || 1;
  const offset = (currentPage - 1) * pageSize;

  const query = `?limit=${pageSize}&offset=${offset}${q?.trim() ? `&q=${encodeURIComponent(q.trim())}` : ""}`;
  const countries = await getCountries(query);

  return (
    <>
      <section className="container w-full rounded-xl">
        <Search />
        <div className="mt-4">
          <CountryCard data={countries} />
        </div>
        <PaginationIconsOnly currentPage={currentPage} hasNextPage={countries.length === pageSize} />
      </section>
    </>
  );
};

export default Home;
