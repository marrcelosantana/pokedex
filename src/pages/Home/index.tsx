import { FiSearch } from 'react-icons/fi';
import { Navbar } from '../../components/Navbar';

import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.title}>
          <img
            src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/raichu.png"
            alt="Raichu"
          />
          <span>Pokédex</span>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquise um pokémon por nome ou número"
          />
          <FiSearch className={styles.searchIcon} />
        </div>
        <span> </span>
      </header>
      <Navbar />
    </div>
  );
}
