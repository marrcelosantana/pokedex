import { createContext, ReactNode, useEffect, useState } from 'react';
import { Pokemon } from '../models/Pokemon';
import { PokemonData } from '../models/PokemonData';
import { api } from '../service/api';

interface PokeContextData {
  pokemons: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  pokemonPerPage: number;
  pokemonData: PokemonData | undefined;
  pokemonDataSelected: PokemonData | undefined;
  setPokemonPerPage(number: number): void;
  setPokemonSelected(pokemon: Pokemon): void;
  setPokemonData(pokemon: PokemonData): void;
  setPokemonDataSelected(pokemon: PokemonData): void;
}

export const PokeContext = createContext({} as PokeContextData);

interface PokeProviderProps {
  children: ReactNode;
}

export function PokeContextProvider({ children }: PokeProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();
  const [pokemonPerPage, setPokemonPerPage] = useState(8);
  const [currentPage] = useState(0);
  const [pokemonData, setPokemonData] = useState<PokemonData>();
  const [pokemonDataSelected, setPokemonDataSelected] = useState<PokemonData>();

  useEffect(() => {
    api
      .get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
      .then((response) => setPokemons(response.data.results));
  }, [currentPage, pokemonPerPage]);

  useEffect(() => {
    if (pokemonSelected) {
      api.get(pokemonSelected.url).then((response) => {
        setPokemonDataSelected(response.data);
      });
    }
  }, [pokemonSelected]);

  return (
    <PokeContext.Provider
      value={{
        pokemons,
        pokemonPerPage,
        setPokemonPerPage,
        pokemonSelected,
        setPokemonSelected,
        pokemonData,
        setPokemonData,
        pokemonDataSelected,
        setPokemonDataSelected,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}
