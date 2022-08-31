import { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PokeContext } from '../../contexts/pokeContext';

import styles from '../PokeStats/styles.module.scss';

export function PokePerTypeStats() {
  const { pokemonsPerTypeDataSelected } = useContext(PokeContext);
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonsPerTypeDataSelected?.stats[0].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonsPerTypeDataSelected?.stats[0].base_stat}
          </span>

          <ProgressBar
            striped
            variant="success"
            animated
            now={pokemonsPerTypeDataSelected?.stats[0].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonsPerTypeDataSelected?.stats[1].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonsPerTypeDataSelected?.stats[1].base_stat}
          </span>

          <ProgressBar
            striped
            variant="info"
            animated
            now={pokemonsPerTypeDataSelected?.stats[1].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonsPerTypeDataSelected?.stats[2].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonsPerTypeDataSelected?.stats[2].base_stat}
          </span>

          <ProgressBar
            striped
            variant="warning"
            animated
            now={pokemonsPerTypeDataSelected?.stats[2].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonsPerTypeDataSelected?.stats[3].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonsPerTypeDataSelected?.stats[3].base_stat}
          </span>

          <ProgressBar
            striped
            variant="danger"
            animated
            now={pokemonsPerTypeDataSelected?.stats[3].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonsPerTypeDataSelected?.stats[4].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonsPerTypeDataSelected?.stats[4].base_stat}
          </span>

          <ProgressBar
            striped
            variant="success"
            animated
            now={pokemonsPerTypeDataSelected?.stats[4].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonsPerTypeDataSelected?.stats[5].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonsPerTypeDataSelected?.stats[5].base_stat}
          </span>

          <ProgressBar
            striped
            animated
            now={pokemonsPerTypeDataSelected?.stats[5].base_stat}
            className="progress-custom"
          />
        </div>
      </div>
    </div>
  );
}
