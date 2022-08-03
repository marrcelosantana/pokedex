import { createContext, ReactNode, useEffect, useState } from 'react';
import { PokeType } from '../models/PokeTypes';
import { Sprite } from '../models/Sprites';
import { api } from '../service/api';

interface PokeContextData {
  pokemons: any[];
  pokemonPerPage: number;
  pokemonId: string;
  pokemonTypes: PokeType[];
  pokemonSprite: Sprite | undefined;
  setPokemonPerPage(number: number): void;
  setPokemonId(id: any): void;
  setPokemonTypes(types: any): void;
  setPokemonSprite(sprites: any): void;
}

export const PokeContext = createContext({} as PokeContextData);

interface PokeProviderProps {
  children: ReactNode;
}

export function PokeContextProvider({ children }: PokeProviderProps) {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(8);
  const [currentPage] = useState(0);
  const [pokemonId, setPokemonId] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState<PokeType[]>([]);
  const [pokemonSprite, setPokemonSprite] = useState<Sprite>();

  useEffect(() => {
    api
      .get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
      .then((response) => setPokemons(response.data.results));
  }, [currentPage, pokemonPerPage]);

  return (
    <PokeContext.Provider
      value={{
        pokemons,
        pokemonPerPage,
        setPokemonPerPage,
        pokemonId,
        setPokemonId,
        pokemonTypes,
        setPokemonTypes,
        pokemonSprite,
        setPokemonSprite,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}
