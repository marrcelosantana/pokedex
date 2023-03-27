import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { AiOutlineLeft } from 'react-icons/ai';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { api } from '../../service/api';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import { getBackground } from '../../utils/utils';

import { Loading } from '../Loading';
import { PokeSearchedStats } from '../PokeSearchedStats';

import { PokeSpecies } from '../../models/PokeSpecies';
import { PokemonData } from '../../models/PokemonData';
import { PokeSearchedAbout } from '../PokeSearchedAbout';
import { PokeSearchedEvolutions } from '../PokeSearchedEvolutions';

import './styles.scss';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
  pokemon: PokemonData | null;
}

export function PokeSearchedModal({
  isOpenModal,
  closeModal,
  pokemon,
}: ModalProps) {
  const { isShiny, handleShinyTransform } = useContext(PokeModalContext);

  const [species, setSpecies] = useState<PokeSpecies>();

  async function getSpecies() {
    if (pokemon) {
      await api.get(pokemon.species.url).then((response) => {
        setSpecies(response.data);
      });
    }
  }

  useEffect(() => {
    getSpecies();
  }, [pokemon?.id]);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {pokemon?.species ? (
        <div style={{ width: '100%', flex: 1 }}>
          <header>
            <button type="button" onClick={() => closeModal()}>
              <AiOutlineLeft size={20} />
            </button>
            <div className="title">
              <span className="pokeName">{pokemon.name}</span>
              <span className="pokeNumber">
                #{Number(pokemon.id) < 100 && <span>0</span>}
                {Number(pokemon.id) < 10 && <span>0</span>}
                {pokemon.id}
              </span>
            </div>
            <div className="pokeSprite">
              {isShiny === false ? (
                <img
                  src={
                    pokemon.sprites.other.home.front_shiny ||
                    pokemon.sprites.other['official-artwork'].front_shiny
                  }
                  alt="Shiny"
                  onClick={() => handleShinyTransform()}
                />
              ) : (
                <img
                  src={
                    pokemon.sprites.other.home.front_default ||
                    pokemon.sprites.other['official-artwork'].front_default
                  }
                  alt={pokemon.name}
                  onClick={() => handleShinyTransform()}
                />
              )}
            </div>
          </header>
          <div className="pokeContainer">
            <img
              src={getBackground(pokemon.types[0].type.name)}
              alt="bg"
              className="background"
            />
            {isShiny === false ? (
              <img
                src={
                  pokemon.sprites.other.home.front_default ||
                  pokemon.sprites.other['official-artwork'].front_default
                }
                alt={pokemon.name}
                className="pokeAvatar"
              />
            ) : (
              <img
                src={
                  pokemon.sprites.other.home.front_shiny ||
                  pokemon.sprites.other['official-artwork'].front_shiny
                }
                alt={pokemon.name}
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
                <PokeSearchedAbout species={species} pokemon={pokemon} />
              </Tab>
              <Tab eventKey="Stats" title="Stats">
                <PokeSearchedStats stats={pokemon.stats} />
              </Tab>
              <Tab eventKey="Pre-Evolutions" title="Pre-Evolutions">
                <PokeSearchedEvolutions species={species} pokemon={pokemon} />
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
