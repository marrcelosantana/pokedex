import { useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { PokeContext } from '../../contexts/pokeContext';
import { PokePerTypeArrays } from '../../models/PokePerTypeArrays';
import { PokeModal } from '../../components/PokeModal';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import starImg from '../../assets/magic-star.svg';

import styles from '../Home/styles.module.scss';
import { PokeCard } from '../../components/PokeCard';

export function BugPage() {
  const {
    showPikachu,
    tradeImg,
    pokemonsPerType,
    setPokemonsPerType,
    setPokemonsPerTypeSelected,
  } = useContext(PokeContext);
  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  const [isOpenModal, setOpenModal] = useState(false);

  async function getPokemons() {
    await api
      .get('/type/bug')
      .then((response) => setPokemonsPerType(response.data));
  }

  useEffect(() => {
    getPokemons();
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
        <div className={styles.pokeListContainer}>
          {pokemonsPerType?.pokemon.map((pokemon: PokePerTypeArrays) => (
            <span
              key={pokemon.pokemon.name}
              onClick={() => handleOpenModal(pokemon)}
            >
              <PokeCard pokemon={pokemon.pokemon} />
            </span>
          ))}
        </div>
        <PokeModal isOpenModal={isOpenModal} closeModal={handleCloseModal} />
      </div>
    </div>
  );
}
