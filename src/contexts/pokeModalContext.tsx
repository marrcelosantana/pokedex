import { createContext, ReactNode, useState } from 'react';

interface PokeModalContextData {
  isAboutOption: boolean;
  isStatsOption: boolean;
  isEvolutionOption: boolean;
  isShiny: boolean;
  spriteIsShiny: boolean;

  setIsAboutOption(bool: boolean): void;
  setIsStatsOption(bool: boolean): void;
  setIsEvolutionOption(bool: boolean): void;
  setIsShiny(bool: boolean): void;
  setSpriteIsShiny(bool: boolean): void;
  handleShinyTransform(): void;
  handleChooseAbout(): void;
  handleChooseStats(): void;
  handleChooseEvolution(): void;
}

export const PokeModalContext = createContext({} as PokeModalContextData);

interface PokeModalProviderProps {
  children: ReactNode;
}

export function PokeModalContextProvider({ children }: PokeModalProviderProps) {
  const [isAboutOption, setIsAboutOption] = useState(true);
  const [isStatsOption, setIsStatsOption] = useState(false);
  const [isEvolutionOption, setIsEvolutionOption] = useState(false);
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

  function handleChooseAbout() {
    if (isAboutOption === false) {
      setIsAboutOption(true);
      setIsStatsOption(false);
      setIsEvolutionOption(false);
    }
  }

  function handleChooseStats() {
    if (isStatsOption === false) {
      setIsStatsOption(true);
      setIsAboutOption(false);
      setIsEvolutionOption(false);
    }
  }

  function handleChooseEvolution() {
    if (isEvolutionOption === false) {
      setIsEvolutionOption(true);
      setIsStatsOption(false);
      setIsAboutOption(false);
    }
  }

  return (
    <PokeModalContext.Provider
      value={{
        isAboutOption,
        setIsAboutOption,
        isStatsOption,
        setIsStatsOption,
        isEvolutionOption,
        setIsEvolutionOption,
        isShiny,
        setIsShiny,
        spriteIsShiny,
        setSpriteIsShiny,
        handleShinyTransform,
        handleChooseAbout,
        handleChooseStats,
        handleChooseEvolution,
      }}
    >
      {children}
    </PokeModalContext.Provider>
  );
}
