import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  route: string;
  pageName: string;
  color: string;
}

export function NavLinkComponent({ route, pageName, color }: NavLinkProps) {
  const activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: color,
    color,
    fontWeight: 'bold',
  };

  const defaultState = {
    color: '#ababab',
  };

  return (
    <div>
      <NavLink
        to={route}
        style={({ isActive }) => (isActive ? activeStyle : defaultState)}
      >
        <span>{pageName}</span>
      </NavLink>
    </div>
  );
}
