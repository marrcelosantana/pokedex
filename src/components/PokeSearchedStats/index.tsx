import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './styles.module.scss';

interface Props {
  stats: any;
}

export function PokeSearchedStats({ stats }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <span className={styles.statsName}>{stats[0].stat.name}</span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>{stats[0].base_stat}</span>

          <ProgressBar
            striped
            variant="success"
            animated
            now={stats[0].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>{stats[1].stat.name}</span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>{stats[1].base_stat}</span>

          <ProgressBar
            striped
            variant="info"
            animated
            now={stats[1].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>{stats[2].stat.name}</span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>{stats[2].base_stat}</span>

          <ProgressBar
            striped
            variant="warning"
            animated
            now={stats[2].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>{stats[3].stat.name}</span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>{stats[3].base_stat}</span>

          <ProgressBar
            striped
            variant="danger"
            animated
            now={stats[3].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>{stats[4].stat.name}</span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>{stats[4].base_stat}</span>

          <ProgressBar
            striped
            variant="success"
            animated
            now={stats[4].base_stat}
            className="progress-custom"
          />
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statsName}>{stats[5].stat.name}</span>
        <div className={styles.statsBar}>
          <span className={styles.baseStat}>{stats[5].base_stat}</span>

          <ProgressBar
            striped
            animated
            now={stats[5].base_stat}
            className="progress-custom"
          />
        </div>
      </div>
    </div>
  );
}
