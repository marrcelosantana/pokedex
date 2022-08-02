import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { PokeCardProps } from '../../models/PokeCardProps';
import venomIcon from '../../assets/Plant.svg';
import plantIcon from '../../assets/Venom.svg';
import { Sprite } from '../../models/Sprites';

import styles from './styles.module.scss';
import { PokeType } from '../../models/PokeTypes';

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
            src={plantIcon}
            alt="type 1"
            title={pokemonTypes[0]?.type.name}
          />
          {pokemonTypes.length === 2 && (
            <img
              src={venomIcon}
              alt="type 2"
              title={pokemonTypes[1]?.type.name}
            />
          )}
        </div>
        <div className={styles.pokeSprite}>
          <img
            src={pokemonSprite?.other.home.front_shiny}
            alt="mini sprite"
            title="Versão shiny"
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={pokemonSprite?.other.home.front_default} alt={pokemon.name} />
      </div>
      <div className={styles.infos}>
        <span className={styles.pokeName}>{pokemon.name}</span>
        <div className={styles.pokeNumber}>
          #{Number(pokemonId) < 10 && <span>0</span>}0{pokemonId}
        </div>
      </div>
    </div>
  );
}
