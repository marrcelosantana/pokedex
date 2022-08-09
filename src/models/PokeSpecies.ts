import { PokeVarieties } from './PokeVarieties';
import { FlavorTexts } from './FlavorTexts';

export type PokeSpecies = {
  name: string;
  url: string;
  evolves_from_species?: {
    name: string;
  };
  flavor_text_entries: FlavorTexts[];
  evolution_chain: {
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  varieties?: PokeVarieties[];
};
