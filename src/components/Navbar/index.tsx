import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export function Navbar() {
  const activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#4d4d4d',
    color: '#4d4d4d',
    fontWeight: 'bold',
  };

  const defaultState = {
    color: '#ababab',
  };

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Todos</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bug-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Inseto</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dark-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Sombrio</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dragon-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Dragão</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electric-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Elétrico</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fairy-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Fada</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fighting-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Lutador</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fire-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Fogo</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flying-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Voador</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ghost-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Fantasma</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/grass-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Planta</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ground-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Terrestre</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ice-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Gelo</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/normal-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Normal</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/psychic-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Psíquico</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rock-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Pedra</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/steel-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Aço</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/water-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Água</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/poison-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Venenoso</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
