import { NavLinkComponent } from '../NavLink';

import styles from './styles.module.scss';

export function Navbar() {
  const routes = [
    { route: '/', color: '#4d4d4d', name: 'All' },
    { route: 'bug-pokes', color: '#729f3f', name: 'Bug' },
    { route: 'dark-pokes', color: '#707070', name: 'Dark' },
    { route: 'dragon-pokes', color: '#f16e57', name: 'Dragon' },
    { route: 'electric-pokes', color: '#eed535', name: 'Electric' },
    { route: 'fairy-pokes', color: '#fdb9e9', name: 'Fairy' },
    { route: 'fighting-pokes', color: '#d56723', name: 'Fighting' },
    { route: 'fire-pokes', color: '#fd7d24', name: 'Fire' },
    { route: 'flying-pokes', color: '#bdb9b8', name: 'Flying' },
    { route: 'ghost-pokes', color: '#7b61a2', name: 'Ghost' },
    { route: 'grass-pokes', color: '#9bcc50', name: 'Grass' },
    { route: 'ground-pokes', color: '#ab9842', name: 'Ground' },
    { route: 'ice-pokes', color: '#51c4e7', name: 'Ice' },
    { route: 'normal-pokes', color: '#a4acaf', name: 'Normal' },
    { route: 'psychic-pokes', color: '#f265b8', name: 'Psychic' },
    { route: 'rock-pokes', color: '#a38c21', name: 'Rock' },
    { route: 'steel-pokes', color: '#9eb7b8', name: 'Steel' },
    { route: 'water-pokes', color: '#4592c4', name: 'Water' },
    { route: 'poison-pokes', color: '#b97fc9', name: 'Poison' },
  ];

  return (
    <div className={styles.container}>
      {routes.map((item) => (
        <NavLinkComponent
          key={item.name}
          color={item.color}
          route={item.route}
          pageName={item.name}
        />
      ))}
    </div>
  );
}
