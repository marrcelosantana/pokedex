import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { PokeContext } from '../../contexts/pokeContext';
import pokedexImg from '../../assets/Pokédex_logo.png';

import styles from './styles.module.scss';

export function Header() {
  const { search, setSearch } = useContext(PokeContext);

  return (
    <header>
      <img src={pokedexImg} alt="Pokedex" className={styles.logo} />
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
