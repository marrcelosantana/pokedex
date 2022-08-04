import { Abilities } from './PokeAbilities';
import { PokeSprites } from './PokeSprites';
import { PokeType } from './PokeTypes';

export type PokemonData = {
  id: number;
  name: string;
  types: PokeType[];
  abilities: Abilities[];
  sprites: PokeSprites;
  height: number;
  weight: number;
};
