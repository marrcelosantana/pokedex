import pokeIcon from '../../assets/Icon.svg';
import venomIcon from '../../assets/Plant.svg';
import plantIcon from '../../assets/Venom.svg';
import bulbaImg from '../../assets/bulba.png';

import styles from './styles.module.scss';

export function PokeCard() {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.typeIcons}>
          <img src={plantIcon} alt="" />
          <img src={venomIcon} alt="" />
        </div>
        <img src={pokeIcon} alt="" />
      </div>
      <div className={styles.imageContainer}>
        <img src={bulbaImg} alt="" />
      </div>
      <div className={styles.infos}>
        <span className={styles.pokeName}>Bulbasaur</span>
        <span className={styles.pokeNumber}>#001</span>
      </div>
    </div>
  );
}
