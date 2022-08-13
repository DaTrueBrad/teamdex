import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PKCompare from "./PKCompare";
import pokemonState from "../../state/allPokemon";
import {useRecoilState} from 'recoil'

function Compare() {
  const [scroll, setScroll] = useState(0)
  const [pokemon, setPokemon] = useRecoilState(pokemonState);
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
    const random1 = random()
    const random2 = random()
    setLeft(random1)
    setRight(random2)
    window.addEventListener("scroll", (e) => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div>
      <h1 id="top">Compare!</h1>
      {window.scrollY > 400 ? (
        <a className="to-top" href="#top">
          ^
        </a>
      ) : null}
      <h3>We've started with two random pokemon!</h3>
      <div className="compare-container">
        {left ? <PKCompare data={left} side="left"/> : <div className="half-page-spacer">Pick a Pokemon</div>}
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
