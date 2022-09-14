import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function Navbar() {
  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.active}>
        <a>Todos</a>
      </Link>
      <Link to="/bug-pokes">
        <a>Inseto</a>
      </Link>
      <Link to="/dark-pokes">
        <a>Sombrio</a>
      </Link>
      <Link to="/dragon-pokes">
        <a>Dragão</a>
      </Link>
      <Link to="/electric-pokes">
        <a>Elétrico</a>
      </Link>
      <Link to="/fairy-pokes">
        <a>Fada</a>
      </Link>
      <Link to="/fighting-pokes">
        <a>Lutador</a>
      </Link>
      <Link to="/fire-pokes">
        <a>Fogo</a>
      </Link>
      <Link to="/flying-pokes">
        <a>Voador</a>
      </Link>
      <Link to="/ghost-pokes">
        <a>Fantasma</a>
      </Link>
      <Link to="/grass-pokes">
        <a>Planta</a>
      </Link>
      <Link to="/ground-pokes">
        <a>Terrestre</a>
      </Link>
      <Link to="/ice-pokes">
        <a>Gelo</a>
      </Link>
      <Link to="/normal-pokes">
        <a>Normal</a>
      </Link>
      <Link to="/psychic-pokes">
        <a>Psíquico</a>
      </Link>
      <Link to="/rock-pokes">
        <a>Pedra</a>
      </Link>
      <Link to="/steel-pokes">
        <a>Aço</a>
      </Link>
      <Link to="/water-pokes">
        <a>Água</a>
      </Link>
      <Link to="/poison-pokes">
        <a>Venenoso</a>
      </Link>
    </nav>
  );
}
