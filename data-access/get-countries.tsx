"use server";

import type { CountryDetailDTO, CountryListDTO } from "@/types/country";

const url = process.env.API_URL;

export const getCountries = async (): Promise<CountryListDTO[]> => {
  try {
    const response = await fetch(`${url}/all?fields=name,flags`, {
      cache: "force-cache",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCountryByName = async (
  name: string,
): Promise<CountryDetailDTO[]> => {
  try {
    const response = await fetch(`${url}/name/${name}`);

    if (!response.ok) return [];

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getBordersCountry = async (
  codes: string[],
): Promise<CountryListDTO[]> => {
  try {
    const response = await fetch(`${url}/alpha?codes=${codes.join(",")}`);

    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
