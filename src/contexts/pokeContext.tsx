import { createContext, ReactNode, useEffect, useState } from 'react';
import { Pokemon } from '../models/Pokemon';
import { api } from '../service/api';

interface PokeContextData {
  pokemons: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  pokemonPerPage: number;
  setPokemonPerPage(number: number): void;
  setPokemonSelected(pokemon: Pokemon): void;
}

export const PokeContext = createContext({} as PokeContextData);

interface PokeProviderProps {
  children: ReactNode;
}

export function PokeContextProvider({ children }: PokeProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(8);
  const [currentPage] = useState(0);

  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();

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
        pokemonSelected,
        setPokemonSelected,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}
