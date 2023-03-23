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
            <span>All</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bug-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Bug</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dark-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Dark</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dragon-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Dragon</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electric-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Electric</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fairy-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Fairy</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fighting-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Fighting</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fire-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Fire</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flying-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Flying</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ghost-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Ghost</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/grass-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Grass</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ground-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Ground</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ice-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Ice</span>
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
            <span>Psychic</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rock-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Rock</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/steel-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Steel</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/water-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Water</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/poison-pokes"
            style={({ isActive }) => (isActive ? activeStyle : defaultState)}
          >
            <span>Poison</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
