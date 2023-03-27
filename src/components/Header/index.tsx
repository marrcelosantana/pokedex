import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import { PokemonData } from '../../models/PokemonData';
import { api } from '../../service/api';
import { PokeSearchedModal } from '../PokeSearchedModal';

import styles from './styles.module.scss';

export function Header() {
  const [pokemonName, setPokemonName] = useState<string>('');
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  function handleOpenModal(pokemonData: PokemonData | null): void {
    setOpenModal(true);
    setIsShiny(false);
    setSpriteIsShiny(true);
  }

  function handleCloseModal(): void {
    setOpenModal(false);
  }

  async function handleSearchPokemon() {
    const query = pokemonName.toLowerCase();

    try {
      const response = await api.get(`/pokemon/${query}`);

      const {
        id,
        name,
        sprites,
        types,
        species,
        abilities,
        moves,
        height,
        weight,
        stats,
      } = response.data;

      const pokemonSearched: PokemonData = {
        id,
        name,
        types,
        sprites,
        species,
        abilities,
        moves,
        height,
        weight,
        stats,
      };

      setPokemon(pokemonSearched);
      handleOpenModal(pokemon);
      setPokemonName('');
    } catch (error) {
      setPokemon(null);

      toast.error('Pokemon não existente!\n Digite novamente.', {
        style: {
          color: '#fff',
          backgroundColor: '#e13c42',
        },
      });

      setPokemonName('');
    }
  }

  return (
    <header>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.logoContainer}>
        <img
          src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif"
          alt="Gengar"
          className={styles.sprite}
        />
        <span>PokéDex</span>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search pokemon by name"
          value={pokemonName}
          onChange={(event) => setPokemonName(event.target.value)}
        />
        <button
          type="submit"
          className={styles.searchBtn}
          disabled={pokemonName.length === 0}
        >
          <FiSearch
            className={styles.searchIcon}
            onClick={handleSearchPokemon}
          />
        </button>
      </div>
      <span> </span>

      {pokemon && (
        <PokeSearchedModal
          isOpenModal={isOpenModal}
          closeModal={handleCloseModal}
          pokemon={pokemon}
        />
      )}
    </header>
  );
}
