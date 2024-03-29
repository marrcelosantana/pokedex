import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { AiOutlineLeft } from 'react-icons/ai';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { api } from '../../service/api';
import { PokeContext } from '../../contexts/pokeContext';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import { getBackground } from '../../utils/utils';

import { PokeAbout } from '../PokeAbout';
import { PokeEvolutions } from '../PokeEvolutions';
import { PokeStats } from '../PokeStats';
import { Loading } from '../Loading';

import { PokeSpecies } from '../../models/PokeSpecies';

import './styles.scss';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function PokeModal({ isOpenModal, closeModal }: ModalProps) {
  const { isShiny, handleShinyTransform } = useContext(PokeModalContext);
  const { pokemonDataSelected, pokemonSelected, setPokemonDataSelected } =
    useContext(PokeContext);

  const [species, setSpecies] = useState<PokeSpecies>();

  async function getPokemonSelected() {
    try {
      if (pokemonSelected) {
        const response = await api.get(pokemonSelected.url);
        setPokemonDataSelected(response.data);
      }
    } catch (error) {
      throw new Error('Unable to load data.');
    }
  }

  useEffect(() => {
    getPokemonSelected();
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
      {pokemonDataSelected ? (
        <div style={{ width: '100%', flex: 1 }}>
          <header>
            <button type="button" onClick={() => closeModal()}>
              <AiOutlineLeft size={20} />
            </button>
            <div className="title">
              <span className="pokeName">{pokemonDataSelected.name}</span>
              <span className="pokeNumber">
                #{Number(pokemonDataSelected.id) < 100 && <span>0</span>}
                {Number(pokemonDataSelected.id) < 10 && <span>0</span>}
                {pokemonDataSelected.id}
              </span>
            </div>
            <div className="pokeSprite">
              {isShiny === false ? (
                <img
                  src={
                    pokemonDataSelected.sprites.other.home.front_shiny ||
                    pokemonDataSelected.sprites.other['official-artwork']
                      .front_shiny
                  }
                  alt="Shiny"
                  onClick={() => handleShinyTransform()}
                />
              ) : (
                <img
                  src={
                    pokemonDataSelected.sprites.other.home.front_default ||
                    pokemonDataSelected.sprites.other['official-artwork']
                      .front_default
                  }
                  alt={pokemonDataSelected.name}
                  onClick={() => handleShinyTransform()}
                />
              )}
            </div>
          </header>
          <div className="pokeContainer">
            <img
              src={getBackground(pokemonDataSelected.types[0].type.name)}
              alt="bg"
              className="background"
            />
            {isShiny === false ? (
              <img
                src={
                  pokemonDataSelected.sprites.other.home.front_default ||
                  pokemonDataSelected.sprites.other['official-artwork']
                    .front_default
                }
                alt={pokemonDataSelected.name}
                className="pokeAvatar"
              />
            ) : (
              <img
                src={
                  pokemonDataSelected.sprites.other.home.front_shiny ||
                  pokemonDataSelected.sprites.other['official-artwork']
                    .front_shiny
                }
                alt={pokemonDataSelected.name}
                className="pokeAvatar"
              />
            )}
          </div>
          <div className="pokeInfo">
            <Tabs
              defaultActiveKey="Stats"
              className="tabs"
              style={{
                fontSize: '14px',
                marginBottom: '1rem',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
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
        </div>
      ) : (
        <Loading />
      )}
    </Modal>
  );
}
