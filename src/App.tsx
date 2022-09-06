import { Header } from './components/Header';
import { PokeContextProvider } from './contexts/pokeContext';
import { PokeModalContextProvider } from './contexts/pokeModalContext';
import { AppRoutes } from './routes';

import '../styles/global.scss';

function App() {
  return (
    <div className="App">
      <PokeContextProvider>
        <PokeModalContextProvider>
          <Header />
          <AppRoutes />
        </PokeModalContextProvider>
      </PokeContextProvider>
    </div>
  );
}

export default App;
