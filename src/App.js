import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/pokedex/Pokedex";
import Footer from "./components/Footer";
import Header from "./components/menu/Header";
import Details from './components/pokedex/Details'

function App() {
  return (
    <div className="App">
      <Header />   
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
