import { createContext, ReactNode, useState } from 'react';
import { Pokemon } from '../models/Pokemon';
import { PokemonData } from '../models/PokemonData';
import { PokemonPerType } from '../models/PokemonPerType';
import { api } from '../service/api';

interface PokeContextData {
  pokemons: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  pokemonData: PokemonData | undefined;
  pokemonDataSelected: PokemonData | undefined;
  pokemonsPerType: PokemonPerType | undefined;

  currentPage: number;
  pokemonPerPage: number;
  showPikachu: boolean;

  setPokemons(pokemon: Pokemon[]): void;
  setPokemonSelected(pokemon: Pokemon): void;
  setPokemonData(pokemon: PokemonData): void;
  setPokemonDataSelected(pokemon: PokemonData): void;

  setPokemonPerPage(number: number): void;
  setShowPikachu(boolean: boolean): void;
  tradeImg(): void;
  handleScroll(event: any): void;

  setPokemonsPerType(pokemon: PokemonPerType): void;

  loadPokemonsPerType(type: string): Promise<void>;
}

export const PokeContext = createContext({} as PokeContextData);

interface PokeProviderProps {
  children: ReactNode;
}

export function PokeContextProvider({ children }: PokeProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();

  const [pokemonData, setPokemonData] = useState<PokemonData>();
  const [pokemonDataSelected, setPokemonDataSelected] = useState<PokemonData>();

  const [pokemonPerPage, setPokemonPerPage] = useState(50);
  const [currentPage] = useState(0);
  const [showPikachu, setShowPikachu] = useState<boolean>(true);

  const [pokemonsPerType, setPokemonsPerType] = useState<PokemonPerType>();

  function tradeImg(): void {
    setShowPikachu(!showPikachu);
  }

  function handleScroll(event: any): void {
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      event.target.documentElement.scrollTop + window.innerHeight
    );

    if (currentHeight + 1 >= scrollHeight) {
      setPokemonPerPage(pokemonPerPage + 25);
    }
  }

  async function loadPokemonsPerType(type: string) {
    try {
      const response = await api.get(`/type/${type}`);
      setPokemonsPerType(response.data);
    } catch (error) {
      throw new Error('Unable to load data.');
    }
  }

  return (
    <PokeContext.Provider
      value={{
        pokemons,
        setPokemons,
        pokemonData,
        setPokemonData,
        pokemonSelected,
        setPokemonSelected,
        pokemonDataSelected,
        setPokemonDataSelected,

        pokemonPerPage,
        setPokemonPerPage,
        showPikachu,
        setShowPikachu,
        tradeImg,
        currentPage,
        handleScroll,

        pokemonsPerType,
        setPokemonsPerType,

        loadPokemonsPerType,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}
