import { Sprites } from './Sprites';
import { PokeType } from './PokeTypes';

export type PokemonData = {
  id: number;
  name: string;
  types: PokeType[];
  sprites: Sprites;
};
