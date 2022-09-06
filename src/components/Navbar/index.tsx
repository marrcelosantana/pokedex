import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.active}>
        <span>Todos</span>
      </Link>
      <Link to="/bug-pokes">
        <span>Inseto</span>
      </Link>
      <Link to="/dark-pokes">
        <span>Sombrio</span>
      </Link>
      <Link to="/dragon-pokes">
        <span>Dragão</span>
      </Link>
      <Link to="/electric-pokes">
        <span>Elétrico</span>
      </Link>
      <Link to="/fairy-pokes">
        <span>Fada</span>
      </Link>
      <Link to="/fighting-pokes">
        <span>Lutador</span>
      </Link>
      <Link to="/fire-pokes">
        <span>Fogo</span>
      </Link>
      <Link to="/flying-pokes">
        <span>Voador</span>
      </Link>
      <Link to="/ghost-pokes">
        <span>Fantasma</span>
      </Link>
      <Link to="/grass-pokes">
        <span>Planta</span>
      </Link>
      <Link to="/ground-pokes">
        <span>Terrestre</span>
      </Link>
      <Link to="/ice-pokes">
        <span>Gelo</span>
      </Link>
      <Link to="/normal-pokes">
        <span>Normal</span>
      </Link>
      <Link to="/psychic-pokes">
        <span>Psíquico</span>
      </Link>
      <Link to="/rock-pokes">
        <span>Pedra</span>
      </Link>
      <Link to="/steel-pokes">
        <span>Aço</span>
      </Link>
      <Link to="/water-pokes">
        <span>Água</span>
      </Link>
      <Link to="/poison-pokes">
        <span>Venenoso</span>
      </Link>
    </div>
  );
}
