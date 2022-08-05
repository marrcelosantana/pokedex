import { PokeContextProvider } from './contexts/pokeContext';
import { AppRoutes } from './routes';

import '../styles/global.scss';
import { PokeModalContextProvider } from './contexts/pokeModalContext';

function App() {
  return (
    <div className="App">
      <PokeContextProvider>
        <PokeModalContextProvider>
          <AppRoutes />
        </PokeModalContextProvider>
      </PokeContextProvider>
    </div>
  );
}

export default App;
