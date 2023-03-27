import { useContext, useEffect, useState } from 'react';

import { Carousel } from '../../components/Carousel';
import { PokeCard } from '../../components/PokeCard';
import { PokeModal } from '../../components/PokeModal';

import { PokeContext } from '../../contexts/pokeContext';
import { PokeModalContext } from '../../contexts/pokeModalContext';

import { PokePerTypeArrays } from '../../models/PokePerTypeArrays';
import { Pokemon } from '../../models/Pokemon';

import styles from '../Home/styles.module.scss';

export function FightingPage() {
  const {
    showPikachu,
    pokemonsPerType,
    setPokemonSelected,
    loadPokemonsPerType,
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

  useEffect(() => {
    loadPokemonsPerType('fighting');
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <Carousel showPikachu={showPikachu} />
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
