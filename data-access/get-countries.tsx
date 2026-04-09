import type { CountryDTO } from "@/types/country";

const url = process.env.API_URL;

export const getCountries = async (): Promise<CountryDTO[]> => {
  try {
    const response = await fetch(`${url}/all?fields=name,flags`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
