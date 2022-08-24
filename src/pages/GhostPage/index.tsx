import { useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { PokeContext } from '../../contexts/pokeContext';
import { PokemonPerType } from '../../models/PokemonPerType';
import { PokePerTypeCard } from '../../components/PokePerTypeCard';
import { PokePerTypeArrays } from '../../models/PokePerTypeArrays';
import starImg from '../../assets/magic-star.svg';

import styles from '../Home/styles.module.scss';

export function GhostPage() {
  const [pokemonsPerType, setPokemonsPerType] = useState<PokemonPerType>();

  const { showPikachu, tradeImg, handleScroll, currentPage, pokemonPerPage } =
    useContext(PokeContext);

  useEffect(() => {
    api
      .get(`/type/ghost`)
      .then((response) => setPokemonsPerType(response.data));
    window.addEventListener('scroll', handleScroll);
  }, [currentPage, pokemonPerPage]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
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
          {pokemonsPerType?.pokemon.map((pokemon: PokePerTypeArrays) => (
            <span key={pokemon.pokemon.name}>
              <PokePerTypeCard pokemon={pokemon} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
