type NativeName = {
  [languageCode: string]: {
    official: string;
    common: string;
  };
};

type Flags = {
  png: string;
  svg: string;
  alt: string;
};

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
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
  svg: string;
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
  capital: string[];
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
  flag: string;
  name: Name;
  currencies: { [code: string]: Currency };
  languages: { [code: string]: string };
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
  flags: Pick<Flags, "svg">;
  name: Pick<Name, "common">;
};

export type CountryDetailDTO = Pick<
  Country,
  "capital" | "subregion" | "population" | "languages" | "flags" | "name"
>;
