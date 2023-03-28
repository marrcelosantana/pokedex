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
    <div className={styles.container}>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>All</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/bug-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Bug</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dark-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Dark</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dragon-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Dragon</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/electric-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Electric</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/fairy-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Fairy</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/fighting-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Fighting</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/fire-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Fire</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/flying-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Flying</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/ghost-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Ghost</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/grass-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Grass</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/ground-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Ground</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/ice-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Ice</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/normal-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Normal</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/psychic-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Psychic</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/rock-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Rock</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/steel-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Steel</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/water-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Water</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/poison-pokes"
          style={({ isActive }) => (isActive ? activeStyle : defaultState)}
        >
          <span>Poison</span>
        </NavLink>
      </div>
    </div>
  );
}
