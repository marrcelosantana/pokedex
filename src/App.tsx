import '../styles/global.scss';
import { PokeContextProvider } from './contexts/pokeContext';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <PokeContextProvider>
        <AppRoutes />
      </PokeContextProvider>
    </div>
  );
}

export default App;
