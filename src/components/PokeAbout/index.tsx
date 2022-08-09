import { useContext } from 'react';
import { PokeContext } from '../../contexts/pokeContext';
import { PokeSpecies } from '../../models/PokeSpecies';

import styles from './styles.module.scss';

interface PokeAboutProps {
  species: PokeSpecies | undefined;
}

export function PokeAbout({ species }: PokeAboutProps) {
  const { pokemonDataSelected } = useContext(PokeContext);

  return (
    <div className={styles.infoDetails}>
      <div className={styles.about}>
        <span>{species?.flavor_text_entries[6]?.flavor_text}</span>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.leftDetails}>
          <div className={styles.wight}>
            <span className={styles.detailTitle}>Peso</span>
            <span className={styles.detailData}>
              {pokemonDataSelected?.weight} lbs
            </span>
          </div>
          <div className={styles.height}>
            <span className={styles.detailTitle}>Altura</span>
            <span className={styles.detailData}>
              {pokemonDataSelected?.height}'00
            </span>
          </div>
        </div>

        <div className={styles.rightDetails}>
          <div className={styles.category}>
            <span className={styles.detailTitle}>Tipos</span>
            <span className={styles.detailData}>
              {pokemonDataSelected?.types[0]?.type.name}
            </span>
            {pokemonDataSelected?.types.length === 2 && (
              <span className={styles.detailData}>
                {pokemonDataSelected?.types[1]?.type.name}
              </span>
            )}
          </div>
          <div className={styles.abilities}>
            <span className={styles.detailTitle}>Habilidades</span>
            <div className={styles.detailData}>
              <span>{pokemonDataSelected?.abilities[0]?.ability.name}</span>
              <span>{pokemonDataSelected?.abilities[1]?.ability.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
