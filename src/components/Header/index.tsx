import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { PokeContext } from '../../contexts/pokeContext';

import styles from './styles.module.scss';

export function Header() {
  const { search, setSearch } = useContext(PokeContext);

  return (
    <header>
      <div className={styles.title}>
        <img
          src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif"
          alt="Gengar"
        />
        <span>Pokédex</span>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquise um pokémon pelo seu nome"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <FiSearch className={styles.searchIcon} />
      </div>
      <span> </span>
    </header>
  );
}
