type LocalizedName = {
  official: string;
  common: string;
};

type CountryFlags = {
  png: string;
  svg: string;
  alt: string;
};

type CountryName = {
  common: string;
  official: string;
  nativeName: Record<string, LocalizedName>;
};

export type CountryDTO = {
  flags: CountryFlags;
  name: CountryName;
};
