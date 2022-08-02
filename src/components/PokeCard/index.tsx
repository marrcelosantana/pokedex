import { useEffect, useState } from 'react';
import pokeIcon from '../../assets/Icon.svg';
import { api } from '../../service/api';
import { PokeCardProps } from '../../models/PokeCardProps';
import venomIcon from '../../assets/Plant.svg';
import plantIcon from '../../assets/Venom.svg';
import bulbaImg from '../../assets/bulba.png';

import styles from './styles.module.scss';

export function PokeCard({ pokemon }: PokeCardProps) {
  const [pokemonId, setPokemonId] = useState('');
  useEffect(() => {
    api.get(pokemon.url).then((response) => {
      setPokemonId(response.data.id);
      // setPokemonTypes(response.data.types);
    });
  }, [pokemon.url, pokemonId]);

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.typeIcons}>
          <img src={plantIcon} alt="" />
          <img src={venomIcon} alt="" />
        </div>
        <img src={pokeIcon} alt="" />
      </div>
      <div className={styles.imageContainer}>
        <img src={bulbaImg} alt="" />
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
