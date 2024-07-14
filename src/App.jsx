import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header/Header'
import Footer from './components//Footer/Footer'
import Home from './views/Home';
import Pokemons from './views/Pokemons';
import Pokemon from './views/Pokemon';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:namePokemon" element={<Pokemon />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;