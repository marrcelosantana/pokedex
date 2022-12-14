import { useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { PokeContext } from '../../contexts/pokeContext';
import { PokePerTypeCard } from '../../components/PokePerTypeCard';
import { PokePerTypeArrays } from '../../models/PokePerTypeArrays';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import { PokePerTypeModal } from '../../components/PokePerTypeModal';
import starImg from '../../assets/magic-star.svg';

import styles from '../Home/styles.module.scss';

export function PsychicPage() {
  const {
    showPikachu,
    tradeImg,
    pokemonsPerType,
    setPokemonsPerType,
    setPokemonsPerTypeSelected,
  } = useContext(PokeContext);
  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    api
      .get('/type/psychic')
      .then((response) => setPokemonsPerType(response.data));
  }, []);

  function handleOpenModal(pokemon: PokePerTypeArrays): void {
    setOpenModal(true);
    setPokemonsPerTypeSelected(pokemon);
    setIsShiny(false);
    setSpriteIsShiny(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <Carousel showPikachu={showPikachu} />
        <div className={styles.buttonsContainer}>
          <Button onClick={() => tradeImg()}>
            <span>Me surpreenda</span>
            <img src={starImg} alt="magic star" />
          </Button>
        </div>
        <div className={styles.pokeListContainer}>
          {pokemonsPerType?.pokemon.map((pokemon: PokePerTypeArrays) => (
            <span
              key={pokemon.pokemon.name}
              onClick={() => handleOpenModal(pokemon)}
            >
              <PokePerTypeCard pokemon={pokemon} />
            </span>
          ))}
        </div>
        <PokePerTypeModal
          isOpenModal={isOpenModal}
          closeModal={handleCloseModal}
        />
      </div>
    </div>
  );
}
