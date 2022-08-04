import { useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { getIconType } from '../../utils/utils';
import { Pokemon } from '../../models/Pokemon';
import { PokemonData } from '../../models/PokemonData';
import { PokeContext } from '../../contexts/pokeContext';

import styles from './styles.module.scss';

export interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokeCard({ pokemon }: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState<PokemonData>();

  async function getPokemonData() {
    await api.get(pokemon.url).then((response) => {
      setPokemonData(response.data);
    });
  }

  useEffect(() => {
    getPokemonData();
  }, [pokemon.url, pokemonData?.id]);

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.typeIcons}>
          <img
            src={getIconType(pokemonData?.types[0].type.name)}
            alt="type 1"
            title={pokemonData?.types[0]?.type.name.toUpperCase()}
          />
          {pokemonData?.types.length === 2 && (
            <img
              src={getIconType(pokemonData?.types[1]?.type.name)}
              alt="type 2"
              title={pokemonData?.types[1]?.type.name.toUpperCase()}
            />
          )}
        </div>
        <div className={styles.pokeSprite}>
          <img
            src={pokemonData?.sprites?.other.home.front_shiny}
            alt="mini shiny sprite"
            title={`SHINY ${pokemonData?.name.toUpperCase()}`}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={pokemonData?.sprites?.other.dream_world.front_default}
          alt={pokemonData?.name}
        />
      </div>
      <div className={styles.infos}>
        <span className={styles.pokeName}>{pokemonData?.name}</span>
        <div className={styles.pokeNumber}>
          #{Number(pokemonData?.id) < 100 && <span>0</span>}
          {Number(pokemonData?.id) < 10 && <span>0</span>}
          {pokemonData?.id}
        </div>
      </div>
    </div>
  );
}
