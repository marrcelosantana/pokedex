import { useContext } from 'react';
import { PokeContext } from '../../contexts/pokeContext';
import { PokemonData } from '../../models/PokemonData';
import { PokeSpecies } from '../../models/PokeSpecies';

import styles from './styles.module.scss';

interface PokeAboutProps {
  species: PokeSpecies | undefined;
  pokemon: PokemonData;
}

export function PokeSearchedAbout({ species, pokemon }: PokeAboutProps) {
  return (
    <>
      {species && pokemon && (
        <div className={styles.infoDetails}>
          <div className={styles.about}>
            <span>{species?.flavor_text_entries[6]?.flavor_text}</span>
          </div>
          <div className={styles.moreDetails}>
            <div className={styles.leftDetails}>
              <div className={styles.wight}>
                <span className={styles.detailTitle}>Weight</span>
                <span className={styles.detailData}>{pokemon?.weight} lbs</span>
              </div>
              <div className={styles.height}>
                <span className={styles.detailTitle}>Height</span>
                <span className={styles.detailData}>
                  {pokemon?.height}
                  '00
                </span>
              </div>
            </div>

            <div className={styles.rightDetails}>
              <div className={styles.category}>
                <span className={styles.detailTitle}>Types</span>
                <span className={styles.detailData}>
                  {pokemon?.types[0]?.type.name}
                </span>
                {pokemon?.types.length === 2 && (
                  <span className={styles.detailData}>
                    {pokemon?.types[1]?.type.name}
                  </span>
                )}
              </div>
              <div className={styles.abilities}>
                <span className={styles.detailTitle}>Abilities</span>
                <div className={styles.detailData}>
                  <span>{pokemon?.abilities[0]?.ability.name}</span>
                  <span>{pokemon?.abilities[1]?.ability.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
