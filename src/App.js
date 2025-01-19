import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import About from './pages/About';
import Programs from './pages/Programs';
import Home from './pages/Home';

function App() {
  return (
    <Router>
            <div className="overlay"></div> {/* Overlay for faded effect */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
