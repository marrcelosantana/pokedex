import { useContext, useEffect, useState } from 'react';

import { Carousel } from '../../components/Carousel';
import { PokeCard } from '../../components/PokeCard';
import { PokeModal } from '../../components/PokeModal';
import { Button } from '../../components/Button';

import { PokeContext } from '../../contexts/pokeContext';
import { PokeModalContext } from '../../contexts/pokeModalContext';

import { PokePerTypeArrays } from '../../models/PokePerTypeArrays';
import { Pokemon } from '../../models/Pokemon';

import starImg from '../../assets/magic-star.svg';

import styles from '../Home/styles.module.scss';

export function IcePage() {
  const {
    showPikachu,
    pokemonsPerType,
    setPokemonSelected,
    loadPokemonsPerType,
    tradeImg,
  } = useContext(PokeContext);

  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  const [isOpenModal, setOpenModal] = useState(false);

  const pokemons = pokemonsPerType?.pokemon;

  function handleOpenModal(pokemon: Pokemon): void {
    setOpenModal(true);
    setPokemonSelected(pokemon);
    setIsShiny(false);
    setSpriteIsShiny(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function shufflePokemons() {
    if (pokemons) {
      for (let i = pokemons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = pokemons[i];
        pokemons[i] = pokemons[j];
        pokemons[j] = temp;
      }
    }
    tradeImg();
    return pokemons;
  }

  useEffect(() => {
    loadPokemonsPerType('ice');
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <Carousel showPikachu={showPikachu} />
        <div className={styles.buttonsContainer}>
          <div className={styles.numberOfPokes}>
            <span>{pokemons?.length} Pokémons</span>
          </div>
          <Button onClick={() => shufflePokemons()}>
            <span>Surprise me</span>
            <img src={starImg} alt="magic star" />
          </Button>
        </div>
        <div className={styles.pokeListContainer}>
          {pokemons &&
            pokemons.map((pokemon: PokePerTypeArrays) => (
              <span
                key={pokemon.pokemon.name}
                onClick={() => handleOpenModal(pokemon.pokemon)}
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
