import React from "react";
import useName from "../../hooks/useName";
import pokemonState from "../../state/allPokemon";
import { useRecoilState } from "recoil";

function TeamCard({ item, deletePokemon }) {
  const [pokemon, setPokemon] = useRecoilState(pokemonState);
  const name = useName(pokemon[item.pokemon_id - 1].name);
  return (
    <div className="pokedex-entry">
      <h4>{item.pokemon_id}</h4>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.pokemon_id}.png`}
        alt=""
        className="pokedex-img"
      />
      <h4>{name}</h4>
      <button onClick={() => deletePokemon(item.id)}>Remove</button>
    </div>
  );
}

export default TeamCard;
