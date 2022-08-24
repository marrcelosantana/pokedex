import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BugPage } from './pages/BugPage';
import { DragonPage } from './pages/DragonPage';
import { ElectricPage } from './pages/ElectricPage';
import { FairyPage } from './pages/FairyPage';
import { FirePage } from './pages/FirePage';
import { Home } from './pages/Home';

export function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fire-pokes" element={<FirePage />} />
        <Route path="/electric-pokes" element={<ElectricPage />} />
        <Route path="/fairy-pokes" element={<FairyPage />} />
        <Route path="/bug-pokes" element={<BugPage />} />
        <Route path="/dragon-pokes" element={<DragonPage />} />
      </Routes>
    </Router>
  );
}
