"use server";

import { get } from "@/lib/api";
import type { CountryDetailDTO, CountryListDTO } from "@/types/country";

export const getCountries = async (query: string): Promise<CountryListDTO[]> => {
  try {
    const data = await get<CountryListDTO[]>(query, {
      cache: "force-cache",
    });

    return data ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCountryByName = async (
  name: string,
): Promise<CountryDetailDTO[]> => {
  try {
    const data = await get<CountryDetailDTO[]>(
      `?names.common=${encodeURIComponent(name)}`,
    );
    return data ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getBordersCountry = async (
  codes: string[],
): Promise<CountryListDTO[]> => {
  try {
    const data = await get<CountryListDTO[]>(
      `/alpha?codes=${codes.join(",")}`,
    );
    return data ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
