import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
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
    try {
      const response = await api.get(`/pokemon/${pokemonName}`);

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
      throw new Error('Unable to load data.');
    }
  }

  return (
    <header>
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
        <FiSearch className={styles.searchIcon} onClick={handleSearchPokemon} />
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
