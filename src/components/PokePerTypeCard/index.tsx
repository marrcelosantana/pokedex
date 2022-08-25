import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { getIconType } from '../../utils/utils';
import { PokemonData } from '../../models/PokemonData';
import { PokePerTypeArrays } from '../../models/PokePerTypeArrays';
import pokeballImg from '../../assets/pokeball.png';

import styles from '../PokeCard/styles.module.scss';

export interface PokePerTypeProps {
  pokemon: PokePerTypeArrays;
}

export function PokePerTypeCard({ pokemon }: PokePerTypeProps) {
  const [pokemonPerTypeData, setPokemonPerTypeData] = useState<PokemonData>();

  async function getPokemonPerTypeData() {
    await api.get(pokemon.pokemon.url).then((response) => {
      setPokemonPerTypeData(response.data);
    });
  }

  useEffect(() => {
    getPokemonPerTypeData();
  }, [pokemon.pokemon.url, pokemonPerTypeData?.id]);

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.typeIcons}>
          <img
            src={getIconType(pokemonPerTypeData?.types[0].type.name)}
            alt="type 1"
            title={pokemonPerTypeData?.types[0]?.type.name.toUpperCase()}
          />
          {pokemonPerTypeData?.types.length === 2 && (
            <img
              src={getIconType(pokemonPerTypeData?.types[1]?.type.name)}
              alt="type 2"
              title={pokemonPerTypeData?.types[1]?.type.name.toUpperCase()}
            />
          )}
        </div>
        <div className={styles.pokeSprite}>
          <img
            src={
              pokemonPerTypeData?.sprites?.other.home.front_shiny ||
              `https://img.pokemondb.net/sprites/home/shiny/${pokemonPerTypeData?.name}.png`
            }
            alt="mini shiny sprite"
            title={`SHINY ${pokemonPerTypeData?.name.toUpperCase()}`}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={
            pokemonPerTypeData?.sprites.other['official-artwork']
              .front_default ||
            `https://img.pokemondb.net/sprites/home/normal/${pokemonPerTypeData?.name}.png`
          }
          alt={pokemonPerTypeData?.name}
        />
      </div>
      <div className={styles.infos}>
        <span className={styles.pokeName}>{pokemonPerTypeData?.name}</span>
        <div className={styles.pokeNumber}>
          #{Number(pokemonPerTypeData?.id) < 100 && <span>0</span>}
          {Number(pokemonPerTypeData?.id) < 10 && <span>0</span>}
          {pokemonPerTypeData?.id}
        </div>
      </div>
    </div>
  );
}
