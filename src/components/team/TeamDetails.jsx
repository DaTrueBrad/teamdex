import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pokemonState from "../../state/allPokemon";
import { useRecoilState } from "recoil";
import useName from "../../hooks/useName";
import { useCookies } from "react-cookie";
import TeamCard from "./TeamCard";
import Pokedex from "../pokedex/Pokedex";
import Swal from "sweetalert2";

function TeamDetails() {
  let { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate("/teams");
  const [details, setDetails] = useState({});
  const [pokemonID, setPokemonID] = useState([]);
  const [pokemon, setPokemon] = useRecoilState(pokemonState);
  const [cookies, setCookie, removeCookie] = useCookies(["userID", "username"])

  const getData = () => {
    axios
      .get(`/api/myTeam/${id}`)
      .then((res) => {
        setDetails(res.data.details);
        setPokemonID(res.data.pokemon);
        console.log(res.data.pokemon);
        console.log(res.data.details);
        console.log(pokemon);
      })
  }

  const addPokemon = (pokeID) => {
    axios.post('/api/addToTeam', {pokemonID: pokeID, teamID: id})
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'You did it!'
      })
      .then((res) => getData())
    })
    .catch(err => {
      console.log(err)
    })
  }

  const deletePokemon = (poke_id) => {
    axios
      .delete(`/api/deletePoke`, {data: {poke_id, team_id: id}})
      .then((res) => {
        getData()
      })
  }

  const DisplayPokemon = pokemonID.map((item, index) => {
    return <TeamCard item={item} deletePokemon={deletePokemon}/>;
  });

  

  useEffect(() => {
    getData()
  }, []);


  return (
    <div>
      <button onClick={goBack}>{"<"} Back</button>
      <h1>{details.name}</h1>
      <h3>{details.notes}</h3>
      <div className="pokedex-container">
        {DisplayPokemon}
        {pokemonID.length < 6 && <div>
          <h4>Add Pokemon</h4>
          <box-icon
            type="solid"
            size="55px"
            id={pokemonID.length < 6 ? null : "invisible"}
            color="#B80C09"
            name="plus-circle"
          ></box-icon>
          <Pokedex type="team" add={addPokemon}/>
        </div>}
      </div>
    </div>
  );
}

export default TeamDetails;
