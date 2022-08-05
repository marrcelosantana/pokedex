import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineLeft } from 'react-icons/ai';
import { PokeContext } from '../../contexts/pokeContext';
import { getBackground } from '../../utils/utils';
import { SpeciesData } from '../../models/SpeciesData';
import { PokeAbout } from '../PokeAbout';
import { api } from '../../service/api';

import './styles.scss';
import { PokeStats } from '../PokeStats';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function PokeInfo({ isOpenModal, closeModal }: ModalProps) {
  const { pokemonDataSelected } = useContext(PokeContext);
  const [isShiny, setIsShiny] = useState(false);
  const [spriteIsShiny, setSpriteIsShiny] = useState(true);
  const [species, setSpecies] = useState<SpeciesData[]>([]);

  function handleShinyTransform() {
    if (isShiny === false && spriteIsShiny === true) {
      setIsShiny(true);
      setSpriteIsShiny(false);
    }
    if (isShiny === true && spriteIsShiny === false) {
      setIsShiny(false);
      setSpriteIsShiny(true);
    }
  }

  async function getSpecies() {
    if (pokemonDataSelected) {
      await api.get(pokemonDataSelected.species.url).then((response) => {
        setSpecies(response.data);
      });
    }
  }

  useEffect(() => {
    getSpecies();
    console.log(species);
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
              alt="Normal"
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
            alt="pokemon"
            className="pokeAvatar"
          />
        ) : (
          <img
            src={pokemonDataSelected?.sprites.other.home.front_shiny}
            alt="pokemon"
            className="pokeAvatar"
          />
        )}
      </div>
      <div className="pokeInfo">
        <nav className="navbar">
          <a href="/">Sobre</a>
          <a href="/">Status</a>
          <a href="/">Evoluções</a>
        </nav>
        {/* <PokeAbout /> */}
        <PokeStats />
      </div>
    </Modal>
  );
}
