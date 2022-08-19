import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FirePage } from './pages/FirePage';
import { Home } from './pages/Home';

export function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fire-pokes" element={<FirePage />} />
      </Routes>
    </Router>
  );
}
