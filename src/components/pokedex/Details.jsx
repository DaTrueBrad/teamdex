import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner";

function Details() {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  const cap = (string) => {
    if (string !== "giratina-altered") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return "Giratina";
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
        <Link to="/pokedex">Back</Link>
        <h1>{cap(pokemon.name)}</h1>
        <img
          src={pokemon.sprites.other["official-artwork"]["front_default"]}
          alt=""
          className="pokedex-img"
        />

      </div>
    );
  });

  useEffect(() => {
    getData();
  }, []);

  return card
}

export default Details;
