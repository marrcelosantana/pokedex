import { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PokeContext } from '../../contexts/pokeContext';
import styles from './styles.module.scss';

export function PokeStats() {
  const { pokemonDataSelected } = useContext(PokeContext);
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonDataSelected?.stats[0].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonDataSelected?.stats[0].base_stat}
          </span>

          <ProgressBar
            striped
            variant="success"
            animated
            now={pokemonDataSelected?.stats[0].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonDataSelected?.stats[1].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonDataSelected?.stats[1].base_stat}
          </span>

          <ProgressBar
            striped
            variant="info"
            animated
            now={pokemonDataSelected?.stats[1].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonDataSelected?.stats[2].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonDataSelected?.stats[2].base_stat}
          </span>

          <ProgressBar
            striped
            variant="warning"
            animated
            now={pokemonDataSelected?.stats[2].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonDataSelected?.stats[3].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonDataSelected?.stats[3].base_stat}
          </span>

          <ProgressBar
            striped
            variant="danger"
            animated
            now={pokemonDataSelected?.stats[3].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonDataSelected?.stats[4].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonDataSelected?.stats[4].base_stat}
          </span>

          <ProgressBar
            striped
            variant="success"
            animated
            now={pokemonDataSelected?.stats[4].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>
          {pokemonDataSelected?.stats[5].stat.name}
        </span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>
            {pokemonDataSelected?.stats[5].base_stat}
          </span>

          <ProgressBar
            striped
            animated
            now={pokemonDataSelected?.stats[5].base_stat}
            className="progress-custom"
          />
        </div>
      </div>
    </div>
  );
}
