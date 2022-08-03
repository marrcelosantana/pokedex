import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../service/api';

interface PokeContextData {
  pokemons: any;
  pokemonPerPage: number;
  setPokemonPerPage(number: number): void;
}

export const PokeContext = createContext({} as PokeContextData);

interface PokeProviderProps {
  children: ReactNode;
}

export function PokeContextProvider({ children }: PokeProviderProps) {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(8);
  const [currentPage] = useState(0);

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
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}
