import Modal from 'react-modal';
import { AiOutlineLeft } from 'react-icons/ai';
import ninetales from '../../assets/ninetales.png';

import './styles.scss';

interface ModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export function PokeInfo({ isOpenModal, closeModal }: ModalProps) {
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
            <span className="pokeName">Ninetales</span>
            <span className="pokeNumber">#038</span>
          </div>
          <div className="pokeSprite">
            <img
              src="https://img.pokemondb.net/sprites/sword-shield/normal/ninetales.png"
              alt="Ninetales"
            />
          </div>
        </header>
        <div className="pokeContainer">
          <img src={ninetales} alt="pokemon" />
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
                  <span className="detailData">43.9 lbs</span>
                </div>
                <div className="height">
                  <span className="detailTitle">Altura</span>
                  <span className="detailData">72kg</span>
                </div>
              </div>

              <div className="rightDetails">
                <div className="category">
                  <span className="detailTitle">Categoria</span>
                  <span className="detailData">Raposa</span>
                </div>
                <div className="habilities">
                  <span className="detailTitle">Habilidades</span>
                  <span className="detailData">Flash Fire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
