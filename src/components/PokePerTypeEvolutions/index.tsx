import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { PokeContext } from '../../contexts/pokeContext';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import { PokeSpecies } from '../../models/PokeSpecies';

import styles from '../PokeEvolutions/styles.module.scss';

interface PokeEvolutionsProps {
  species: PokeSpecies | undefined;
}

export function PokePerTypeEvolutions({ species }: PokeEvolutionsProps) {
  const { pokemonsPerTypeDataSelected } = useContext(PokeContext);
  const { isShiny } = useContext(PokeModalContext);
  return (
    <div className={styles.container}>
      {species?.evolves_from_species?.name !== undefined && (
        <div className={styles.preEvolution}>
          <div className={styles.spriteContainer}>
            {isShiny === false ? (
              <img
                src={`https://img.pokemondb.net/sprites/home/normal/${species?.evolves_from_species?.name}.png`}
                alt="sprite pre evolution"
                title={species?.evolves_from_species.name}
              />
            ) : (
              <img
                src={`https://img.pokemondb.net/sprites/home/shiny/${species?.evolves_from_species?.name}.png`}
                alt="sprite pre evolution"
                title={species?.evolves_from_species.name}
              />
            )}
          </div>
          <span>{species?.evolves_from_species?.name}</span>
        </div>
      )}

      {species?.evolves_from_species?.name !== undefined && (
        <div className={styles.arrowContainer}>
          <BsArrowRight size={24} />
        </div>
      )}

      <div className={styles.evolution}>
        <div className={styles.spriteContainer}>
          {isShiny === false ? (
            <img
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemonsPerTypeDataSelected?.name}.png`}
              alt="sprite evolution"
              title={pokemonsPerTypeDataSelected?.name}
            />
          ) : (
            <img
              src={`https://img.pokemondb.net/sprites/home/shiny/${pokemonsPerTypeDataSelected?.name}.png`}
              alt="sprite evolution"
              title={pokemonsPerTypeDataSelected?.name}
            />
          )}
        </div>
        <span>{pokemonsPerTypeDataSelected?.name}</span>
      </div>
    </div>
  );
}
