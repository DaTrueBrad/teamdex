import axios from "axios";
import React, { useState, useEffect } from "react";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("");

  const cap = (string) => {
    if (string !== "giratina-altered") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return "Giratina";
  };

  const getData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898").then((res) => {
      setPokemon(res.data.results);
    });
  };

  let display = pokemon
    .filter((poke, index) => {
      return poke.name.includes(filter);
    })
    .map((poke, index) => {
      let id = poke.url.replace(/\D+/g, "").substring(1);
      return (
        <div className="pokedex-entry">
          <h4>{id}</h4>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt=""
            className="pokedex-img"
          />
          <h4>{cap(poke.name)}</h4>
        </div>
      );
    });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
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
