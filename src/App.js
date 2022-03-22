import axios from 'axios'
import "./App.css";
import Menu from "./components/menu/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/pokedex/Pokedex";
import Footer from "./components/Footer";
import Header from "./components/menu/Header";
import Details from './components/pokedex/Details'
import Compare from "./components/compare/Compare";
import Team from "./components/team/Team";
import NewTeam from "./components/team/NewTeam";
import Login from "./components/loginAndRegister/Login";
import Register from "./components/loginAndRegister/Register";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import pokemonState from "./state/allPokemon";
import TeamDetails from './components/team/TeamDetails';

function App() {
  const [pokemon, setPokemon] = useRecoilState(pokemonState)

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898").then((res) => {
      setPokemon(res.data.results);
    });
  }, [])
  return (
    <div className="App">
      <Header />   
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="compare" element={<Compare />} />
          <Route path="teams" element={<Team />} />
          <Route path="teams/new" element={<NewTeam />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="myTeam/:id" element={<TeamDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
