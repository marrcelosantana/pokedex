export function getIconType(type: string) {
  let icon;

  switch (type) {
    case 'grass':
      icon = 'grass';
      break;
    case 'bug':
      icon = 'bug';
      break;
    case 'dragon':
      icon = 'dragon';
      break;
    case 'water':
      icon = 'water';
      break;
    case 'ice':
      icon = 'ice';
      break;
    case 'normal':
      icon = 'normal';
      break;
    case 'fairy':
      icon = 'fairy';
      break;
    case 'psychic':
      icon = 'psychic';
      break;
    case 'dark':
      icon = 'dark';
      break;
    case 'electric':
      icon = 'electric';
      break;
    case 'ghost':
      icon = 'ghost';
      break;
    case 'rock':
      icon = 'rock';
      break;
    case 'ground':
      icon = 'ground';
      break;
    case 'flying':
      icon = 'flying';
      break;
    case 'fighting':
      icon = 'fighting';
      break;
    case 'steel':
      icon = 'steel';
      break;
    case 'poison':
      icon = 'poison';
      break;
    case 'fire':
      icon = 'fire';
      break;
    default:
      break;
  }
  return icon ? `../../public/PokeTypes-Icons/${icon}-icon.svg` : undefined;
}
