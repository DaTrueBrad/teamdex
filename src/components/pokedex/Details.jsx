import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner";

function Details() {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

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

  const getData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon([res.data]));
  };
  // TODO Possibly add CSS classes for each pokemon type, and name it after each type, such as .flying, .grass, etc. Then, do an if statement where if they have two classes, return two spans, otherwise return one span.
  const card = pokemon.map((pokemon, index) => {
    return (
      <div className="details-page">
        <Link to="/pokedex"><button className="sm-btn">Back</button></Link>
        <div className="details-container">
          <h1>{cap(pokemon.name)}</h1>
          <img
            src={pokemon.sprites.other["official-artwork"]["front_default"]}
            alt=""
            className="pokedex-img"
          />
          <h4>Weight: {pokemon.weight}</h4>
          <div className="type-container">
            {pokemon.types.map((type, index) => {
              return <h4 className={type.type.name}>{cap(type.type.name)}</h4>;
            })}
          </div>
          {pokemon.stats.map((stat, index) => {
            return (
              <h4>
                {cap(stat.stat.name)}: {stat.base_stat}
              </h4>
            );
          })}
          
        </div>
      </div>
    );
  });

  useEffect(() => {
    getData();
  }, []);

  return card;
}

export default Details;
