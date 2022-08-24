import { useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { PokeContext } from '../../contexts/pokeContext';
import { PokemonPerType } from '../../models/PokemonPerType';
import { PokePerTypeCard } from '../../components/PokePerTypeCard';
import starImg from '../../assets/magic-star.svg';

import styles from '../Home/styles.module.scss';

export function FirePage() {
  const [pokemonsPerType, setPokemonsPerType] = useState<PokemonPerType>();

  const { showPikachu, tradeImg } = useContext(PokeContext);

  useEffect(() => {
    api.get('/type/10').then((response) => setPokemonsPerType(response.data));
  }, []);

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
          {pokemonsPerType?.pokemon.map((pokemon: any) => (
            <span key={pokemon.pokemon.url}>
              <PokePerTypeCard pokemon={pokemon} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
