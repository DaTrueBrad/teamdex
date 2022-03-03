import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PKCompare from "./PKCompare";

function Compare() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("");
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const cap = (string) => {
    switch(string) {
      case 'ho-oh':
        return 'Ho-oh'
      case 'porygon-z':
        return 'Porygon-Z'
      case 'farfetchd':
        return "Farfetch'd"
      case 'mr-mime':
        return 'Mr. Mime'
      case 'mr-rime':
        return 'Mr. Rime'
      default:
        string = string.split('-')[0]
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };
  const random = () => { // min and max included 
    return Math.floor(Math.random() * (898) + 1)
  }

  const getData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898").then((res) => {
      setPokemon(res.data.results);
    });
  };

  let display = pokemon
    .filter((poke, index) => {
      return poke.name.includes(filter.toLowerCase());
    })
    .map((poke, index) => {
      let id = poke.url.replace(/\D+/g, "").substring(1);
      return (
        <div className="pokedex-entry" key={index}>
          <h4>{id}</h4>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt=""
            className="pokedex-img"
          />
          <h4>{cap(poke.name)}</h4>
          <div className="button-container">
            <button onClick={() => setLeft(id)}>Left</button>
            <button onClick={() => setRight(id)}>Right</button>
          </div>
        </div>
      );
    });

  useEffect(() => {
    getData();
    const random1 = random()
    const random2 = random()
    setLeft(random1)
    setRight(random2)
  }, []);

  return (
    <div>
      <h1>Compare!</h1>
      <h3>We've started with two random pokemon!</h3>
      <div className="compare-container">
        {left ? <PKCompare data={left} side="left"/> : <div classname="half-page-spacer">Pick a Pokemon</div>}
        <PKCompare data={right} side="right"/>
      </div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="pokedex-container">{pokemon ? display : null}</div>
    </div>
  );
}

export default Compare;
