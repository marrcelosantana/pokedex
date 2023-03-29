import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PokeModalContext } from '../../contexts/pokeModalContext';
import { PokemonData } from '../../models/PokemonData';
import { PokeSearchedModal } from '../PokeSearchedModal';

import { api } from '../../service/api';

import styles from './styles.module.scss';

type FormDataProps = {
  pokemonName: string;
};

const formSchema = yup.object({
  pokemonName: yup.string().trim().required('Enter the pokemon name'),
});

export function Header() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  const { control, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  function handleOpenModal(pokemonData: PokemonData | null): void {
    setOpenModal(true);
    setIsShiny(false);
    setSpriteIsShiny(true);
  }

  function handleCloseModal(): void {
    setOpenModal(false);
  }

  async function handleSearchPokemon({ pokemonName }: FormDataProps) {
    const query = pokemonName.toLowerCase();

    try {
      const response = await api.get(`/pokemon/${query}`);

      const {
        id,
        name,
        sprites,
        types,
        species,
        abilities,
        moves,
        height,
        weight,
        stats,
      } = response.data;

      const pokemonSearched: PokemonData = {
        id,
        name,
        types,
        sprites,
        species,
        abilities,
        moves,
        height,
        weight,
        stats,
      };

      setPokemon(pokemonSearched);
      handleOpenModal(pokemon);

      reset({ pokemonName: '' });
    } catch (error) {
      setPokemon(null);

      toast.error('Pokemon não existente!\n Digite novamente.', {
        style: {
          color: '#fff',
          backgroundColor: '#e13c42',
        },
      });

      reset({ pokemonName: '' });
    }
  }

  return (
    <header>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.logoContainer}>
        <img
          src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif"
          alt="Gengar"
          className={styles.sprite}
        />
        <span>PokéDex</span>
      </div>
      <form
        className={styles.searchContainer}
        onSubmit={handleSubmit(handleSearchPokemon)}
      >
        <Controller
          control={control}
          name="pokemonName"
          render={({ field: { value, onChange } }) => (
            <input
              type="text"
              placeholder="Search pokemon by name"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <button type="submit" className={styles.searchBtn}>
          <FiSearch className={styles.searchIcon} />
        </button>
      </form>
      <span> </span>

      {pokemon && (
        <PokeSearchedModal
          isOpenModal={isOpenModal}
          closeModal={handleCloseModal}
          pokemon={pokemon}
        />
      )}
    </header>
  );
}
