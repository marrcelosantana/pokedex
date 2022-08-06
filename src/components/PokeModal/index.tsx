import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineLeft } from 'react-icons/ai';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { PokeContext } from '../../contexts/pokeContext';
import { getBackground } from '../../utils/utils';
import { PokeAbout } from '../PokeAbout';
import { PokeEvolutions } from '../PokeEvolutions';
import { PokeStats } from '../PokeStats';
import { api } from '../../service/api';
import { PokeSpecies } from '../../models/PokeSpecies';
import { PokeModalContext } from '../../contexts/pokeModalContext';
import pokeballImg from '../../assets/pokeball.png';

import './styles.scss';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function PokeModal({ isOpenModal, closeModal }: ModalProps) {
  const { pokemonDataSelected } = useContext(PokeContext);
  const { isShiny, handleShinyTransform } = useContext(PokeModalContext);

  const [species, setSpecies] = useState<PokeSpecies>();
  const [evolutionData, setEvolutionData] = useState();

  async function getSpecies() {
    if (pokemonDataSelected) {
      await api.get(pokemonDataSelected.species.url).then((response) => {
        setSpecies(response.data);
      });
    }
  }

  async function getEvolutionData() {
    if (pokemonDataSelected) {
      await api
        .get(pokemonDataSelected.species?.evolution_chain?.url)
        .then((response) => {
          setEvolutionData(response.data);
        });
      console.log(evolutionData);
    }
  }

  useEffect(() => {
    getSpecies();
    getEvolutionData();
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
              src={pokemonDataSelected?.sprites.other.home.front_shiny}
              alt="Shiny"
              onClick={() => handleShinyTransform()}
            />
          ) : (
            <img
              src={pokemonDataSelected?.sprites.other.home.front_default}
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
            src={pokemonDataSelected?.sprites.other.home.front_default}
            alt={pokemonDataSelected?.name}
            className="pokeAvatar"
          />
        ) : (
          <img
            src={pokemonDataSelected?.sprites.other.home.front_shiny}
            alt={pokemonDataSelected?.name}
            className="pokeAvatar"
          />
        )}
        {pokemonDataSelected?.sprites.other.home.front_default === null && (
          <img src={pokeballImg} alt="" className="pokeballImg" />
        )}
      </div>
      <div className="pokeInfo">
        <Tabs
          justify
          defaultActiveKey="Sobre"
          className="tabs"
          style={{ fontSize: '14px', marginBottom: '1rem' }}
        >
          <Tab eventKey="Sobre" title="Sobre">
            <PokeAbout species={species} />
          </Tab>
          <Tab eventKey="Stats" title="Stats">
            <PokeStats />
          </Tab>
          <Tab eventKey="Pré-Evoluções" title="Pré-Evoluções">
            <PokeEvolutions species={species} />
          </Tab>
        </Tabs>
      </div>
    </Modal>
  );
}
