import { Pokemon } from './Pokemon';

export type PokemonPerType = {
  name: string;
  pokemon: [
    {
      pokemon: Pokemon;
    }
  ];
};
