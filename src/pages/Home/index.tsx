import { useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';

import { Pokemon } from '../../models/Pokemon';

import { Carousel } from '../../components/Carousel';
import { Button } from '../../components/Button';
import { PokeCard } from '../../components/PokeCard';
import { PokeModal } from '../../components/PokeModal';

import { PokeContext } from '../../contexts/pokeContext';
import { PokeModalContext } from '../../contexts/pokeModalContext';

import starImg from '../../assets/magic-star.svg';

import styles from './styles.module.scss';

export function Home() {
  const [isOpenModal, setOpenModal] = useState(false);

  const {
    pokemons,
    setPokemonSelected,
    showPikachu,
    tradeImg,
    pokemonPerPage,
    currentPage,
    setPokemons,
    handleScroll,
  } = useContext(PokeContext);

  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  function handleOpenModal(pokemon: Pokemon): void {
    setOpenModal(true);
    setPokemonSelected(pokemon);
    setIsShiny(false);
    setSpriteIsShiny(true);
  }

  function handleCloseModal(): void {
    setOpenModal(false);
  }

  async function loadPokemons() {
    try {
      const response = await api.get(
        `/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`
      );
      setPokemons(response.data.results);
      window.addEventListener('scroll', handleScroll);
    } catch (error) {
      throw new Error('Unable to load data.');
    }
  }

  function shufflePokemons() {
    for (let i = pokemons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pokemons[i];
      pokemons[i] = pokemons[j];
      pokemons[j] = temp;
    }

    tradeImg();
    return pokemons;
  }

  useEffect(() => {
    loadPokemons();
  }, [currentPage, pokemonPerPage]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <Carousel showPikachu={showPikachu} />
        <div className={styles.buttonContainer}>
          <Button onClick={() => shufflePokemons()}>
            <span>Surprise me</span>
            <img src={starImg} alt="magic star" />
          </Button>
        </div>
        <div className={styles.pokeListContainer}>
          {pokemons.map((pokemon: Pokemon) => (
            <span onClick={() => handleOpenModal(pokemon)} key={pokemon.name}>
              <PokeCard pokemon={pokemon} />
            </span>
          ))}
        </div>
      </div>
      <PokeModal isOpenModal={isOpenModal} closeModal={handleCloseModal} />
    </div>
  );
}
