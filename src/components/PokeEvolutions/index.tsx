import { AiOutlineRight } from 'react-icons/ai';

import styles from './styles.module.scss';

export function PokeEvolutions() {
  return (
    <div className={styles.container}>
      <div className={styles.preEvolution}>
        <div className={styles.spriteContainer}>
          <img src="../../../public/PokeTypes-Icons/bug-icon.svg" alt="" />
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <AiOutlineRight size={24} />
      </div>
      <div className={styles.evolution}>
        <div className={styles.spriteContainer}>
          <img src="../../../public/PokeTypes-Icons/bug-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
