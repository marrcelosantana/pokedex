import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function Navbar() {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <span>Todos</span>
      </Link>
      <Link to="">
        <span>Inseto</span>
      </Link>
      <Link to="">
        <span>Sombrio</span>
      </Link>
      <Link to="">
        <span>Dragão</span>
      </Link>
      <Link to="">
        <span>Elétrico</span>
      </Link>
      <Link to="">
        <span>Fada</span>
      </Link>
      <Link to="">
        <span>Lutador</span>
      </Link>
      <Link to="/fire-pokes">
        <span>Fogo</span>
      </Link>
      <Link to="">
        <span>Voador</span>
      </Link>
      <Link to="">
        <span>Fantasma</span>
      </Link>
      <Link to="">
        <span>Planta</span>
      </Link>
      <Link to="">
        <span>Terrestre</span>
      </Link>
      <Link to="">
        <span>Gelo</span>
      </Link>
      <Link to="">
        <span>Normal</span>
      </Link>
      <Link to="">
        <span>Psíquico</span>
      </Link>
      <Link to="">
        <span>Pedra</span>
      </Link>
      <Link to="">
        <span>Aço</span>
      </Link>
      <Link to="">
        <span>Água</span>
      </Link>
    </nav>
  );
}
