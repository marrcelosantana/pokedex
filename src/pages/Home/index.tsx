import { useContext, useState } from 'react';
import starImg from '../../assets/magic-star.svg';
import { Pokemon } from '../../models/Pokemon';
import { Carousel } from '../../components/Carousel';
import { Button } from '../../components/Button';
import { PokeCard } from '../../components/PokeCard';
import { PokeModal } from '../../components/PokeModal';
import { PokeContext } from '../../contexts/pokeContext';
import { PokeModalContext } from '../../contexts/pokeModalContext';

import styles from './styles.module.scss';

export function Home() {
  const [showPikachu, setShowPikachu] = useState<boolean>(true);
  const [isOpenModal, setOpenModal] = useState(false);

  const { pokemonsFilter, setPokemonSelected } = useContext(PokeContext);

  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  function handleOpenModal(pokemon: Pokemon): void {
    setOpenModal(true);
    setPokemonSelected(pokemon);
    setIsShiny(false);
    setSpriteIsShiny(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

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
      <div className={styles.content}>
        <Carousel showPikachu={showPikachu} />
        <div className={styles.buttonsContainer}>
          <Button onClick={() => tradeImg()}>
            <span>Me surpreenda</span>
            <img src={starImg} alt="magic star" />
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
          {pokemonsFilter.map((pokemon: Pokemon) => (
            <span onClick={() => handleOpenModal(pokemon)}>
              <PokeCard key={pokemon.name} pokemon={pokemon} />
            </span>
          ))}
        </div>
      </div>
      <PokeModal isOpenModal={isOpenModal} closeModal={handleCloseModal} />
    </div>
  );
}
