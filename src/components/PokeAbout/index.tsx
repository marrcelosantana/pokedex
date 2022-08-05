import { useContext } from 'react';
import { PokeContext } from '../../contexts/pokeContext';
import styles from './styles.module.scss';

export function PokeAbout() {
  const { pokemonDataSelected } = useContext(PokeContext);
  return (
    <div className={styles.infoDetails}>
      <div className={styles.about}>
        <span>Dizem que tem mais de mil anos de idade.</span>
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
            <span className={styles.detailTitle}>Espécie</span>
            <span className={styles.detailData}>Raposa</span>
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
