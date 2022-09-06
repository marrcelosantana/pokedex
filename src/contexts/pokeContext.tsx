import { createContext, ReactNode, useState } from 'react';
import { Pokemon } from '../models/Pokemon';
import { PokemonData } from '../models/PokemonData';
import { PokemonPerType } from '../models/PokemonPerType';
import { PokePerTypeArrays } from '../models/PokePerTypeArrays';

interface PokeContextData {
  pokemons: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  pokemonData: PokemonData | undefined;
  pokemonDataSelected: PokemonData | undefined;

  currentPage: number;
  pokemonPerPage: number;
  showPikachu: boolean;
  pokemonsFilter: any;
  search: string;

  pokemonsPerType: PokemonPerType | undefined;
  pokemonsPerTypeSelected: PokePerTypeArrays | undefined;
  pokemonsPerTypeData: PokemonData | undefined;
  pokemonsPerTypeDataSelected: PokemonData | undefined;

  setPokemons(pokemon: Pokemon[]): void;
  setPokemonSelected(pokemon: Pokemon): void;
  setPokemonData(pokemon: PokemonData): void;
  setPokemonDataSelected(pokemon: PokemonData): void;

  setPokemonPerPage(number: number): void;
  setShowPikachu(boolean: boolean): void;
  setSearch(string: string): void;
  tradeImg(): void;
  handleScroll(event: any): void;

  setPokemonsPerType(pokemon: PokemonPerType): void;
  setPokemonsPerTypeSelected(pokemon: PokePerTypeArrays): void;
  setPokemonsPerTypeData(pokemon: PokemonData): void;
  setPokemonsPerTypeDataSelected(pokemon: PokemonData): void;
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

  const [pokemonPerPage, setPokemonPerPage] = useState(8);
  const [currentPage] = useState(0);
  const [showPikachu, setShowPikachu] = useState<boolean>(true);

  const [pokemonsPerType, setPokemonsPerType] = useState<PokemonPerType>();
  const [pokemonsPerTypeSelected, setPokemonsPerTypeSelected] =
    useState<PokePerTypeArrays>();
  const [pokemonsPerTypeData, setPokemonsPerTypeData] = useState<PokemonData>();
  const [pokemonsPerTypeDataSelected, setPokemonsPerTypeDataSelected] =
    useState<PokemonData>();

  const [search, setSearch] = useState('');
  const lowerSearch = search.toLowerCase();

  const pokemonsFilter = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(lowerSearch)
  );

  function tradeImg(): void {
    if (showPikachu === false) {
      setShowPikachu(true);
    }
    if (showPikachu === true) {
      setShowPikachu(false);
    }
  }

  function handleScroll(event: any) {
    const scrollHeight = event.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      event.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      setPokemonPerPage(pokemonPerPage + 4);
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
        pokemonsFilter,
        search,
        setSearch,
        showPikachu,
        setShowPikachu,
        tradeImg,
        currentPage,
        handleScroll,

        pokemonsPerType,
        setPokemonsPerType,
        pokemonsPerTypeData,
        setPokemonsPerTypeData,
        pokemonsPerTypeDataSelected,
        setPokemonsPerTypeDataSelected,
        pokemonsPerTypeSelected,
        setPokemonsPerTypeSelected,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}
