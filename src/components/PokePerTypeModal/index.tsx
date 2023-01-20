import { useContext, useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-modal';
import { AiOutlineLeft } from 'react-icons/ai';
import { api } from '../../service/api';
import { PokeContext } from '../../contexts/pokeContext';
import { getBackground } from '../../utils/utils';
import { PokeSpecies } from '../../models/PokeSpecies';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import { PokePerTypeAbout } from '../PokePerTypeAbout';
import { PokePerTypeStats } from '../PokePerTypeStats';
import { PokePerTypeEvolutions } from '../PokePerTypeEvolutions';

import '../PokeModal/styles.scss';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function PokePerTypeModal({ isOpenModal, closeModal }: ModalProps) {
  const {
    setPokemonsPerTypeDataSelected,
    pokemonsPerTypeSelected,
    pokemonsPerTypeDataSelected,
  } = useContext(PokeContext);
  const { isShiny, handleShinyTransform } = useContext(PokeModalContext);

  const [species, setSpecies] = useState<PokeSpecies>();

  async function getPokemonSelected() {
    if (pokemonsPerTypeSelected) {
      await api.get(pokemonsPerTypeSelected.pokemon.url).then((response) => {
        setPokemonsPerTypeDataSelected(response.data);
      });
    }
  }

  useEffect(() => {
    getPokemonSelected();
  }, [pokemonsPerTypeSelected]);

  async function getSpecies() {
    if (pokemonsPerTypeDataSelected) {
      await api
        .get(pokemonsPerTypeDataSelected.species.url)
        .then((response) => {
          setSpecies(response.data);
        });
    }
  }

  useEffect(() => {
    getSpecies();
  }, [pokemonsPerTypeDataSelected?.id]);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <header>
        <button type="button" onClick={() => closeModal()}>
          <AiOutlineLeft size={20} />
        </button>
        <div className="title">
          <span className="pokeName">{pokemonsPerTypeDataSelected?.name}</span>
          <span className="pokeNumber">
            #{Number(pokemonsPerTypeDataSelected?.id) < 100 && <span>0</span>}
            {Number(pokemonsPerTypeDataSelected?.id) < 10 && <span>0</span>}
            {pokemonsPerTypeDataSelected?.id}
          </span>
        </div>
        <div className="pokeSprite">
          {isShiny === false ? (
            <img
              src={
                pokemonsPerTypeDataSelected?.sprites.other.home.front_shiny ||
                `https://img.pokemondb.net/sprites/home/shiny/${pokemonsPerTypeDataSelected?.name}.png`
              }
              alt="Shiny"
              onClick={() => handleShinyTransform()}
            />
          ) : (
            <img
              src={
                pokemonsPerTypeDataSelected?.sprites.other.home.front_default ||
                `https://img.pokemondb.net/sprites/home/normal/${pokemonsPerTypeDataSelected?.name}.png`
              }
              alt={pokemonsPerTypeDataSelected?.name}
              onClick={() => handleShinyTransform()}
            />
          )}
        </div>
      </header>
      <div className="pokeContainer">
        <img
          src={getBackground(pokemonsPerTypeDataSelected?.types[0].type.name)}
          alt="bg"
          className="background"
        />
        {isShiny === false ? (
          <img
            src={
              pokemonsPerTypeDataSelected?.sprites.other.home.front_default ||
              `https://img.pokemondb.net/sprites/home/normal/${pokemonsPerTypeDataSelected?.name}.png`
            }
            alt={pokemonsPerTypeDataSelected?.name}
            className="pokeAvatar"
          />
        ) : (
          <img
            src={
              pokemonsPerTypeDataSelected?.sprites.other.home.front_shiny ||
              `https://img.pokemondb.net/sprites/home/shiny/${pokemonsPerTypeDataSelected?.name}.png`
            }
            alt={pokemonsPerTypeDataSelected?.name}
            className="pokeAvatar"
          />
        )}
      </div>
      <div className="pokeInfo">
        <Tabs
          justify
          defaultActiveKey="Stats"
          className="tabs"
          style={{
            fontSize: '14px',
            marginBottom: '1rem',
          }}
        >
          <Tab eventKey="About" title="About">
            <PokePerTypeAbout species={species} />
          </Tab>
          <Tab eventKey="Stats" title="Stats">
            <PokePerTypeStats />
          </Tab>
          <Tab eventKey="Pre-Evolutions" title="Pre-Evolutions">
            <PokePerTypeEvolutions species={species} />
          </Tab>
        </Tabs>
      </div>
    </Modal>
  );
}
