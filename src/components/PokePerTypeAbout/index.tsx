import { useContext } from 'react';
import { PokeContext } from '../../contexts/pokeContext';
import { PokeSpecies } from '../../models/PokeSpecies';

import styles from '../PokeAbout/styles.module.scss';

interface PokeAboutProps {
  species: PokeSpecies | undefined;
}

export function PokePerTypeAbout({ species }: PokeAboutProps) {
  const { pokemonsPerTypeDataSelected } = useContext(PokeContext);

  return (
    <div className={styles.infoDetails}>
      <div className={styles.about}>
        <span>{species?.flavor_text_entries[6]?.flavor_text}</span>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.leftDetails}>
          <div className={styles.wight}>
            <span className={styles.detailTitle}>Weight</span>
            <span className={styles.detailData}>
              {pokemonsPerTypeDataSelected?.weight} lbs
            </span>
          </div>
          <div className={styles.height}>
            <span className={styles.detailTitle}>Height</span>
            <span className={styles.detailData}>
              {pokemonsPerTypeDataSelected?.height}
              '00
            </span>
          </div>
        </div>

        <div className={styles.rightDetails}>
          <div className={styles.category}>
            <span className={styles.detailTitle}>Types</span>
            <span className={styles.detailData}>
              {pokemonsPerTypeDataSelected?.types[0]?.type.name}
            </span>
            {pokemonsPerTypeDataSelected?.types.length === 2 && (
              <span className={styles.detailData}>
                {pokemonsPerTypeDataSelected?.types[1]?.type.name}
              </span>
            )}
          </div>
          <div className={styles.abilities}>
            <span className={styles.detailTitle}>Abilities</span>
            <div className={styles.detailData}>
              <span>
                {pokemonsPerTypeDataSelected?.abilities[0]?.ability.name}
              </span>
              <span>
                {pokemonsPerTypeDataSelected?.abilities[1]?.ability.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
