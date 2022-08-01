import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { Carousel } from '../../components/Carousel';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';

import styles from './styles.module.scss';

export function Home() {
  const [tradeImg, setTradeImg] = useState(false);

  function trade(): void {
    if (tradeImg === false) {
      setTradeImg(true);
    }
    if (tradeImg === true) {
      setTradeImg(false);
    }
  }
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
      <div className={styles.content}>
        <Carousel tradeImg={tradeImg} />
        <div className={styles.buttonsContainer}>
          <Button onClick={trade}>
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
      </div>
    </div>
  );
}
