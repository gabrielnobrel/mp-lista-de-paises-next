import type { CountryDetailDTO } from "@/types/country";
import { formatPopulation } from "./formatters";

export type CountryDetail = {
  label: string;
  value: string | string[];
  icon: string;
  type: "text" | "badge";
};

export type CountryDetailsResult = {
  country: string;
  flag: string;
  data: CountryDetail[];
};

export function buildCountryDetails(
  country: CountryDetailDTO,
): CountryDetailsResult {
  return {
    country: country.name.common,
    flag: country.flags.svg,
    data: [
      { label: "Capital", value: country.capital, icon: "🏙️", type: "text" },
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
        value: Object.values(country.languages),
        icon: "💬",
        type: "badge",
      },
    ],
  };
}
