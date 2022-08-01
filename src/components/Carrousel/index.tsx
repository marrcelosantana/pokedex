import styles from './styles.module.scss';
import pikachuImg from '../../assets/pikachu.png';

export function Carrousel() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Sua pokédex oficial!</h2>
        <span>
          Aqui você pode encontrar todosos pokemons
          <br /> na ordem que você preferir.
        </span>
      </div>
      <img src={pikachuImg} alt="pikachu" />
    </div>
  );
}
