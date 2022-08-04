import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineLeft } from 'react-icons/ai';
import { PokeContext } from '../../contexts/pokeContext';

import './styles.scss';
import { getBackground } from '../../utils/utils';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function PokeInfo({ isOpenModal, closeModal }: ModalProps) {
  const { pokemonDataSelected } = useContext(PokeContext);
  const [isShiny, setIsShiny] = useState(false);
  const [spriteIsShiny, setSpriteIsShiny] = useState(true);

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
        <div className="infoDetails">
          <div className="about">
            <span>Dizem que tem mais de mil anos de idade.</span>
          </div>
          <div className="moreDetails">
            <div className="leftDetails">
              <div className="weight">
                <span className="detailTitle">Peso</span>
                <span className="detailData">
                  {pokemonDataSelected?.weight} lbs
                </span>
              </div>
              <div className="height">
                <span className="detailTitle">Altura</span>
                <span className="detailData">
                  {pokemonDataSelected?.height}'00
                </span>
              </div>
            </div>

            <div className="rightDetails">
              <div className="category">
                <span className="detailTitle">Espécie</span>
                <span className="detailData">Raposa</span>
              </div>
              <div className="habilities">
                <span className="detailTitle">Habilidades</span>
                <div className="detailData">
                  <span>{pokemonDataSelected?.abilities[0]?.ability.name}</span>
                  <span>{pokemonDataSelected?.abilities[1]?.ability.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
