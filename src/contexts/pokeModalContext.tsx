import { createContext, ReactNode, useState } from 'react';

interface PokeModalContextData {
  isShiny: boolean;
  spriteIsShiny: boolean;
  setIsShiny(bool: boolean): void;
  setSpriteIsShiny(bool: boolean): void;
  handleShinyTransform(): void;
}

export const PokeModalContext = createContext({} as PokeModalContextData);

interface PokeModalProviderProps {
  children: ReactNode;
}

export function PokeModalContextProvider({ children }: PokeModalProviderProps) {
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
    <PokeModalContext.Provider
      value={{
        isShiny,
        setIsShiny,
        spriteIsShiny,
        setSpriteIsShiny,
        handleShinyTransform,
      }}
    >
      {children}
    </PokeModalContext.Provider>
  );
}
