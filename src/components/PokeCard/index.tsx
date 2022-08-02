import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { PokeCardProps } from '../../models/PokeCardProps';
import { Sprite } from '../../models/Sprites';
import { PokeType } from '../../models/PokeTypes';
import { getIconType } from '../../utils/utils';

import styles from './styles.module.scss';

export function PokeCard({ pokemon }: PokeCardProps) {
  const [pokemonId, setPokemonId] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState<PokeType[]>([]);
  const [pokemonSprite, setPokemonSprite] = useState<Sprite>();

  useEffect(() => {
    api.get(pokemon.url).then((response) => {
      setPokemonId(response.data.id);
      setPokemonTypes(response.data.types);
      setPokemonSprite(response.data.sprites);
    });
  }, [pokemon.url, pokemonId]);

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.typeIcons}>
          <img
            src={getIconType(pokemonTypes[0]?.type.name)}
            alt="type 1"
            title={pokemonTypes[0]?.type.name.toUpperCase()}
          />
          {pokemonTypes.length === 2 && (
            <img
              src={getIconType(pokemonTypes[1]?.type.name)}
              alt="type 2"
              title={pokemonTypes[1]?.type.name.toUpperCase()}
            />
          )}
        </div>
        <div className={styles.pokeSprite}>
          <img
            src={pokemonSprite?.other.home.front_shiny}
            alt="mini shiny sprite"
            title="Versão Shiny"
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={pokemonSprite?.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className={styles.infos}>
        <span className={styles.pokeName}>{pokemon.name}</span>
        <div className={styles.pokeNumber}>
          #{Number(pokemonId) < 100 && <span>0</span>}
          {Number(pokemonId) < 10 && <span>0</span>}
          {pokemonId}
        </div>
      </div>
    </div>
  );
}
