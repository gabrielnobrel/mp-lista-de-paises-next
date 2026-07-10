import type { CountryDetailDTO } from "@/types/country";
import { formatPopulation } from "./formatters";

export type CountryDetail =
  | { label: string; value: string | string[]; icon: string; type: "text" }
  | { label: string; value: { name: string }[]; icon: string; type: "badge" };

export type CountryDetailsResult = {
  country: string;
  flag: string;
  data: CountryDetail[];
};

export function buildCountryDetails(
  country: CountryDetailDTO,
): CountryDetailsResult {
  return {
    country: country.names?.common ?? "-",
    flag: country.flag?.url_svg ?? "/images/flag-placeholder.svg",
    data: [
      { label: "Capital", value: country.capitals?.[0]?.name ?? "-", icon: "🏙️", type: "text" },
      {
        label: "Continente",
        value: country.subregion,
        icon: "🗺️",
        type: "text",
      },
      {
        label: "População",
        value: formatPopulation(country.population),
        icon: "👥",
        type: "text",
      },
      {
        label: "Línguas faladas",
        value: country.languages ?? [],
        icon: "💬",
        type: "badge",
      },
    ],
  };
}
