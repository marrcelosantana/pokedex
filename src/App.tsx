import '../styles/global.scss';
import { PokeContext } from './contexts/pokeContext';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <PokeContext.Provider value={[]}>
        <AppRoutes />
      </PokeContext.Provider>
    </div>
  );
}

export default App;
