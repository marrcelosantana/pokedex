import { Abilities } from './PokeAbilities';
import { PokeMoves } from './PokeMoves';
import { PokeSpecies } from './PokeSpecies';
import { PokeSprites } from './PokeSprites';
import { PokeStats } from './PokeStats';
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
  species: PokeSpecies;
  stats: PokeStats[];
};
