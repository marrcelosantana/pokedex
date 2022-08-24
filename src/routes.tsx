import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BugPage } from './pages/BugPage';
import { DarkPage } from './pages/DarkPage';
import { DragonPage } from './pages/DragonPage';
import { ElectricPage } from './pages/ElectricPage';
import { FairyPage } from './pages/FairyPage';
import { FightingPage } from './pages/FightingPage';
import { FirePage } from './pages/FirePage';
import { FlyingPage } from './pages/FlyingPage';
import { GhostPage } from './pages/GhostPage';
import { GrassPage } from './pages/GrassPage';
import { GroundPage } from './pages/GroundPage';
import { Home } from './pages/Home';
import { IcePage } from './pages/IcePage';
import { NormalPage } from './pages/NormalPage';

export function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bug-pokes" element={<BugPage />} />
        <Route path="/dark-pokes" element={<DarkPage />} />
        <Route path="/dragon-pokes" element={<DragonPage />} />
        <Route path="/electric-pokes" element={<ElectricPage />} />
        <Route path="/fairy-pokes" element={<FairyPage />} />
        <Route path="/fighting-pokes" element={<FightingPage />} />
        <Route path="/fire-pokes" element={<FirePage />} />
        <Route path="/flying-pokes" element={<FlyingPage />} />
        <Route path="/ghost-pokes" element={<GhostPage />} />
        <Route path="/grass-pokes" element={<GrassPage />} />
        <Route path="/ground-pokes" element={<GroundPage />} />
        <Route path="/ice-pokes" element={<IcePage />} />
        <Route path="/normal-pokes" element={<NormalPage />} />
      </Routes>
    </Router>
  );
}
