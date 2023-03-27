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
    pokemonsFilter,
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
    const response = await api.get(
      `/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`
    );
    setPokemons(response.data.results);
    window.addEventListener('scroll', handleScroll);
  }

  useEffect(() => {
    loadPokemons();
  }, [currentPage, pokemonPerPage]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <Carousel showPikachu={showPikachu} />
        <div className={styles.buttonsContainer}>
          <Button onClick={() => tradeImg()}>
            <span>Surprise me</span>
            <img src={starImg} alt="magic star" />
          </Button>
          {/* <select>
            <option value="" disabled selected hidden>
              Visualizado por...
            </option>
            <option value="">Ordem Crescente</option>
            <option value="">Ordem Decrescente</option>
            <option value="">De A - Z</option>
            <option value="">De Z - A</option>
          </select> */}
        </div>
        <div className={styles.pokeListContainer}>
          {pokemonsFilter.map((pokemon: Pokemon) => (
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
