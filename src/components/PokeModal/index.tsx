import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineLeft } from 'react-icons/ai';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { api } from '../../service/api';
import { PokeContext } from '../../contexts/pokeContext';
import { getBackground } from '../../utils/utils';
import { PokeAbout } from '../PokeAbout';
import { PokeEvolutions } from '../PokeEvolutions';
import { PokeStats } from '../PokeStats';
import { PokeSpecies } from '../../models/PokeSpecies';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import pokeballImg from '../../assets/pokeball.png';

import './styles.scss';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function PokeModal({ isOpenModal, closeModal }: ModalProps) {
  const { pokemonDataSelected, pokemonSelected, setPokemonDataSelected } =
    useContext(PokeContext);
  const { isShiny, handleShinyTransform } = useContext(PokeModalContext);

  const [species, setSpecies] = useState<PokeSpecies>();

  useEffect(() => {
    if (pokemonSelected) {
      api.get(pokemonSelected.url).then((response) => {
        setPokemonDataSelected(response.data);
      });
    }
  }, [pokemonSelected]);

  async function getSpecies() {
    if (pokemonDataSelected) {
      await api.get(pokemonDataSelected.species.url).then((response) => {
        setSpecies(response.data);
      });
    }
  }

  useEffect(() => {
    getSpecies();
  }, [pokemonDataSelected?.id]);

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
          <span className="pokeName">{pokemonDataSelected?.name}</span>
          <span className="pokeNumber">
            #{Number(pokemonDataSelected?.id) < 100 && <span>0</span>}
            {Number(pokemonDataSelected?.id) < 10 && <span>0</span>}
            {pokemonDataSelected?.id}
          </span>
        </div>
        <div className="pokeSprite">
          {isShiny === false ? (
            <img
              src={
                pokemonDataSelected?.sprites.other.home.front_shiny ||
                `https://img.pokemondb.net/sprites/home/shiny/${pokemonDataSelected?.name}.png`
              }
              alt="Shiny"
              onClick={() => handleShinyTransform()}
            />
          ) : (
            <img
              src={
                pokemonDataSelected?.sprites.other.home.front_default ||
                `https://img.pokemondb.net/sprites/home/normal/${pokemonDataSelected?.name}.png`
              }
              alt={pokemonDataSelected?.name}
              onClick={() => handleShinyTransform()}
            />
          )}
        </div>
      </header>
      <div className="pokeContainer">
        <img
          src={getBackground(pokemonDataSelected?.types[0].type.name)}
          alt="bg"
          className="background"
        />
        {isShiny === false ? (
          <img
            src={
              pokemonDataSelected?.sprites.other.home.front_default ||
              `https://img.pokemondb.net/sprites/home/normal/${pokemonDataSelected?.name}.png` ||
              pokeballImg
            }
            alt={pokemonDataSelected?.name}
            className="pokeAvatar"
          />
        ) : (
          <img
            src={
              pokemonDataSelected?.sprites.other.home.front_shiny ||
              `https://img.pokemondb.net/sprites/home/shiny/${pokemonDataSelected?.name}.png` ||
              pokeballImg
            }
            alt={pokemonDataSelected?.name}
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
            <PokeAbout species={species} />
          </Tab>
          <Tab eventKey="Stats" title="Stats">
            <PokeStats />
          </Tab>
          <Tab eventKey="Pre-Evolutions" title="Pre-Evolutions">
            <PokeEvolutions species={species} />
          </Tab>
        </Tabs>
      </div>
    </Modal>
  );
}
