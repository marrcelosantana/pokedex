import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { Carousel } from '../../components/Carousel';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';

import styles from './styles.module.scss';
import { PokeCard } from '../../components/PokeCard';

export function Home() {
  const [showPikachu, setShowPikachu] = useState<boolean>(true);

  function tradeImg(): void {
    if (showPikachu === false) {
      setShowPikachu(true);
    }
    if (showPikachu === true) {
      setShowPikachu(false);
    }
  }
  return (
    <div className={styles.container}>
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
            placeholder="Pesquise um pokémon por nome ou número"
          />
          <FiSearch className={styles.searchIcon} />
        </div>
        <span> </span>
      </header>
      <Navbar />
      <div className={styles.content}>
        <Carousel showPikachu={showPikachu} />
        <div className={styles.buttonsContainer}>
          <Button onClick={() => tradeImg()}>
            <span>Me surpreenda</span>
            <AiOutlineStar size={20} />
          </Button>
          <select>
            <option value="" disabled selected hidden>
              Visualizado por...
            </option>
            <option value="">Ordem Crescente</option>
            <option value="">Ordem Decrescente</option>
            <option value="">De A - Z</option>
            <option value="">De Z - A</option>
          </select>
        </div>
        <div className={styles.pokeListContainer}>
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
        </div>
      </div>
    </div>
  );
}
