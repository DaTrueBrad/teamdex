import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pokemonState from "../../state/allPokemon";
import { useRecoilState } from "recoil";

function Pokedex({type, add}) {
  // const [pokemon, setPokemon] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [pokemon, setPokemon] = useRecoilState(pokemonState);
  const [filter, setFilter] = useState("");

  const cap = (string) => {
    switch (string) {
      case "ho-oh":
        return "Ho-oh";
      case "porygon-z":
        return "Porygon-Z";
      case "farfetchd":
        return "Farfetch'd";
      case "mr-mime":
        return "Mr. Mime";
      case "mr-rime":
        return "Mr. Rime";
      default:
        string = string.split("-")[0];
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };

  // const getData = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=898").then((res) => {
  //     setPokemon(res.data.results);
  //   });
  // };

  let display = pokemon
    .filter((poke, index) => {
      return poke.name.includes(filter.toLowerCase());
    })
    .map((poke, index) => {
      let id = poke.url.replace(/\D+/g, "").substring(1);
      return (
        <div className="pokedex-entry">
        <Link to={`/details/${id}`} key={index}>
          <h4>{id}</h4>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt=""
            className="pokedex-img"
          />
          <h4>{cap(poke.name)}</h4>
          {/* //TODO we can turn this into a reusable component for the TeamDetails  */}
        </Link>
          {type === "team" && <button onClick={() => add(id)}>Add</button>}
        </div>
      );
    });

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      
        <a className="to-top" id={window.scrollY < 400 && "hide-top"} href="#top">
          ^
        </a>
      
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="pokedex-container">{pokemon ? display : null}</div>
    </div>
  );
}

export default Pokedex;
