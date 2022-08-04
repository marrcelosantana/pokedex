import { Abilities } from './PokeAbilities';
import { PokeMoves } from './PokeMoves';
import { PokeSprites } from './PokeSprites';
import { PokeType } from './PokeTypes';

export type PokemonData = {
  id: number;
  name: string;
  types: PokeType[];
  abilities: Abilities[];
  moves: PokeMoves[];
  sprites: PokeSprites;
  height: number;
  weight: number;
};
