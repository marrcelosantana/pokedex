import { NavLink } from 'react-router-dom';
import { NavLinkComponent } from '../NavLink';
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
      <NavLinkComponent route="/" pageName="All" color="#4d4d4d" />

      <NavLinkComponent route="/bug-pokes" pageName="Bug" color="#729f3f" />

      <NavLinkComponent route="/dark-pokes" pageName="Dark" color="#707070" />

      <NavLinkComponent
        route="/dragon-pokes"
        pageName="Dragon"
        color="#f16e57"
      />

      <NavLinkComponent
        route="/electric-pokes"
        pageName="Electric"
        color="#eed535"
      />

      <NavLinkComponent route="/fairy-pokes" pageName="Fairy" color="#fdb9e9" />

      <NavLinkComponent
        route="/fighting-pokes"
        pageName="Fighting"
        color="#d56723"
      />
      <NavLinkComponent route="/fire-pokes" pageName="Fire" color="#fd7d24" />

      <NavLinkComponent
        route="/flying-pokes"
        pageName="Flying"
        color="#bdb9b8"
      />

      <NavLinkComponent route="/ghost-pokes" pageName="Ghost" color="#7b61a2" />

      <NavLinkComponent route="/grass-pokes" pageName="Grass" color="#9bcc50" />

      <NavLinkComponent
        route="/ground-pokes"
        pageName="Ground"
        color="#ab9842"
      />

      <NavLinkComponent route="/ice-pokes" pageName="Ice" color="#51c4e7" />

      <NavLinkComponent
        route="/normal-pokes"
        pageName="Normal"
        color="#a4acaf"
      />

      <NavLinkComponent
        route="/psychic-pokes"
        pageName="Psychic"
        color="#f265b8"
      />

      <NavLinkComponent route="/rock-pokes" pageName="Rock" color="#a38c21" />

      <NavLinkComponent route="/steel-pokes" pageName="Steel" color="#9eb7b8" />

      <NavLinkComponent route="/water-pokes" pageName="Water" color="#4592c4" />

      <NavLinkComponent
        route="/poison-pokes"
        pageName="Poison"
        color="#b97fc9"
      />
    </div>
  );
}
