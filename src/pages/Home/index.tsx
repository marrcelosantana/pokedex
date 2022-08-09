import { useContext, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineReload, AiOutlineArrowUp } from 'react-icons/ai';
import starImg from '../../assets/magic-star.svg';
import { Pokemon } from '../../models/Pokemon';
import { Carousel } from '../../components/Carousel';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';
import { PokeCard } from '../../components/PokeCard';
import { PokeModal } from '../../components/PokeModal';
import { PokeContext } from '../../contexts/pokeContext';

import styles from './styles.module.scss';
import { PokeModalContext } from '../../contexts/pokeModalContext';

export function Home() {
  const [showPikachu, setShowPikachu] = useState<boolean>(true);
  const [isOpenModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');
  const { pokemons, pokemonPerPage, setPokemonPerPage, setPokemonSelected } =
    useContext(PokeContext);

  const { setIsShiny, setSpriteIsShiny } = useContext(PokeModalContext);

  const lowerSearch = search.toLowerCase();
  const pokemonsFilter = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(lowerSearch)
  );

  // useEffect(() => {
  //   const intersectionObserver = new IntersectionObserver((entries) => {
  //     if (entries.some((entry) => entry.isIntersecting)) {
  //       console.log('Elemento está visível');
  //       setPokemonPerPage(pokemonPerPage + 24);
  //     }
  //   });

  //   intersectionObserver.observe(document.querySelector('loadMore'));

  //   return () => intersectionObserver.disconnect();
  // });

  function handleOpenModal(pokemon: Pokemon): void {
    setOpenModal(true);
    setPokemonSelected(pokemon);
    setIsShiny(false);
    setSpriteIsShiny(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function tradeImg(): void {
    if (showPikachu === false) {
      setShowPikachu(true);
    }
    if (showPikachu === true) {
      setShowPikachu(false);
    }
  }

  function loadMorePokemons() {
    setPokemonPerPage(pokemonPerPage + 32);
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.title}>
          <img
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif"
            alt="Gengar"
          />
          <span>Pokédex</span>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquise um pokémon pelo seu nome"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <FiSearch className={styles.searchIcon} />
        </div>
        <span> </span>
      </header>
      <Navbar />
      <div className={styles.content}>
        <Carousel showPikachu={showPikachu} />
        <div className={styles.buttonsContainer}>
          <Button onClick={() => tradeImg()}>
            <span>Me surpreenda</span>
            <img src={starImg} alt="magic star" />
          </Button>
          <select>
            <option value="" disabled selected hidden>
              Visualizado por...
            </option>
            <option value="">Ordem Crescente</option>
            <option value="">Ordem Decrescente</option>
            <option value="">De A - Z</option>
            <option value="">De Z - A</option>
          </select>
        </div>
        <div className={styles.pokeListContainer}>
          {pokemonsFilter.map((pokemon: Pokemon) => (
            <span onClick={() => handleOpenModal(pokemon)}>
              <PokeCard key={pokemon.name} pokemon={pokemon} />
            </span>
          ))}
        </div>
        <div className={styles.loadContainer} id="loadMore">
          <Button onClick={() => loadMorePokemons()}>
            <span>Carregar mais...</span>
            <AiOutlineReload size={24} />
          </Button>
          {pokemonPerPage >= 16 && (
            <a
              href="#"
              className={styles.backToTop}
              title="Voltar para o topo da página."
            >
              <Button>
                <AiOutlineArrowUp size={24} />
              </Button>
            </a>
          )}
        </div>
      </div>
      <PokeModal isOpenModal={isOpenModal} closeModal={handleCloseModal} />
    </div>
  );
}
