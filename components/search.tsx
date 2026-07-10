"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);

      if (event.target.value) {
        params.set("q", event.target.value);
      } else {
        params.delete("q");
      }
      params.set("page", "1");

      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );

  return (
    <Input
      placeholder="Pesquisar"
      defaultValue={searchParams.get("q") ?? ""}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Search;
