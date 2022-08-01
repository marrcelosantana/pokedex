import styles from './styles.module.scss';
import pikachuImg from '../../assets/pikachu.png';
import arcanineImg from '../../assets/arcanine.png';

export interface CarouselPrpos {
  tradeImg: boolean;
}

export function Carousel({ tradeImg }: CarouselPrpos) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Sua pokédex oficial!</h2>
        <span>
          Aqui você pode encontrar todosos pokemons
          <br /> na ordem que você preferir.
        </span>
      </div>
      {tradeImg ? (
        <img src={arcanineImg} alt="arcanine" className={styles.arcanineImg} />
      ) : (
        <img src={pikachuImg} alt="pikachu" className={styles.pikachuImg} />
      )}
    </div>
  );
}
