import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineLeft } from 'react-icons/ai';
import { PokeContext } from '../../contexts/pokeContext';

import './styles.scss';

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
      <div className="content">
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
          {isShiny === false ? (
            <img
              src={pokemonDataSelected?.sprites.other.home.front_default}
              alt="pokemon"
            />
          ) : (
            <img
              src={pokemonDataSelected?.sprites.other.home.front_shiny}
              alt="pokemon"
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
              <span>
                É um pokemon do tipo fogo introduzido na primeira <br />
                geração, é a evolução final de Vulpix. Dizem que <br />
                Ninetales tem mais de mil anos de idade, e que carrega poderes
                supernaturais em sas caudas.
              </span>
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
                    {pokemonDataSelected?.height}m
                  </span>
                </div>
              </div>

              <div className="rightDetails">
                <div className="category">
                  <span className="detailTitle">Categoria</span>
                  <span className="detailData">Raposa</span>
                </div>
                <div className="habilities">
                  <span className="detailTitle">Habilidades</span>
                  <div className="detailData">
                    <span>
                      {pokemonDataSelected?.abilities[0].ability.name}
                    </span>
                    <span>
                      {pokemonDataSelected?.abilities[1].ability.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
