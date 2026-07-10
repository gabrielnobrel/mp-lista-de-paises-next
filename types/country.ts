type NativeName = {
  [languageCode: string]: {
    common: string;
    official: string;
  };
};

type Flags = {
  url_png: string;
  url_svg: string;
  description: string;
};

type Name = {
  common: string;
  official: string;
  native: NativeName;
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Car = {
  signs: string[];
  side: "right" | "left";
};

type Currency = {
  symbol: string;
  name: string;
};

type Demonym = {
  f: string;
  m: string;
};

type Translation = {
  official: string;
  common: string;
};

type CoatOfArms = {
  png: string;
  url_svg: string;
};

type CapitalInfo = {
  latlng: [number, number];
};

type PostalCode = {
  format: string;
  regex: string;
};

export type Country = {
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  idd: Idd;
  capitals: { name: string }[];
  altSpellings: string[];
  region: string;
  subregion: string;
  landlocked: boolean;
  borders: string[];
  area: number;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flag: {
    url_svg: string;
  };
  names: Name;
  currencies: { [code: string]: Currency };
  languages: { name: string }[];
  latlng: [number, number];
  demonyms: { [languageCode: string]: Demonym };
  translations: { [languageCode: string]: Translation };
  gini: { [year: string]: number };
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: "monday" | "sunday" | "saturday";
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};

export type CountryListDTO = {
  names: Pick<Name, "common">;
  flag: Pick<Flags, "url_svg">;
};

export type CountryDetailDTO = Pick<
  Country,
  | "capitals"
  | "subregion"
  | "population"
  | "languages"
  | "flag"
  | "names"
  | "borders"
>;
