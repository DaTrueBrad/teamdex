import React, { useEffect, useState } from 'react'
import axios from 'axios';

function PKCompare({data, side}) {
  const [pokemon, setPokemon] = useState([]);

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
      case 'special-attack':
        return 'Sp. Attack'
      case 'special-defense':
        return 'Sp. Defense'
      default:
        string = string.split('-')[0]
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };

  const getData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${data}`)
      .then((res) => {
        setPokemon([res.data])
      });
  };

  useEffect(() => {
    getData()
  }, [data])

  const card = pokemon.map((pokemon, index) => {
    return (
      <div key={index}>
      <div className="side-compare">
          <h4>{cap(pokemon.name)}</h4>
          <img
            src={pokemon.sprites.other["official-artwork"]["front_default"]}
            alt=""
            className="pokedex-img"
          />
          <div className="type-container">
            {pokemon.types.map((type, index) => {
              return <h4 className={type.type.name} key={index}>{cap(type.type.name)}</h4>;
            })}
          </div>
          {pokemon.stats.map((stat, index) => {
            return (
              <h5 key={index}>
                {cap(stat.stat.name)}: {stat.base_stat}
              </h5>
            );
          })}
          
        </div>
    </div>
    )
  })
  
  return card
}

export default PKCompare