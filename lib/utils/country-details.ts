import type { CountryDetailDTO } from "@/types/country";
import { formatPopulation } from "./formatters";

export type CountryDetail = {
  label: string;
  value: string | string[];
  icon: string;
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
    country: country.name.common ?? "-",
    flag: country.flags.svg,
    data: [
      { label: "Capital", value: country.capital, icon: "🏙️" },
      { label: "Continente", value: country.subregion, icon: "🗺️" },
      {
        label: "População",
        value: formatPopulation(country.population),
        icon: "👥",
      },
      {
        label: "Línguas faladas",
        value: Object.values(country.languages),
        icon: "💬",
      },
    ],
  };
}
