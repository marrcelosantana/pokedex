export type PokeSpecies = {
  name: string;
  url: string;
  evolves_from_species?: {
    name: string;
  };
};
