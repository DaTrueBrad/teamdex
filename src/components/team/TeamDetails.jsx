import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import pokemonState from "../../state/allPokemon";
import {useRecoilState} from 'recoil'

function TeamDetails() {
  const [details, setDetails] = useState({})
  const [pokemonID, setPokemonID] = useState([])
  const [pokemon, setPokemon] = useRecoilState(pokemonState);
  const navigate = useNavigate()
  const goBack = () => navigate("/teams")

  let {id} = useParams()
//TODO FIGURE OUT A WAY TO DISLAY ALL OF MY POKEMON ON PAGE, USIGN THE FILTE RMETHOD. WE CN DO IT
  const DisplayPokemon = () => {
    let myPokemon = pokemonID.map((item, index) => pokemon[item.pokemon_id - 1].name)
    console.log("line 16",myPokemon)
    return myPokemon.map((item, index) => <h3>{item.name}</h3>)
  }

  useEffect(() => {
    axios.get(`/api/myTeam/${id}`)
    .then((res) => {
      setDetails(res.data.details)
      setPokemonID(res.data.pokemon)
      console.log(res.data.pokemon)
    })
    .then((res) => {
    
    })
  }, [])
  return (
    <div>
      <button onClick={goBack}>
      {'<'} Back
      </button>
      <h1>{details.name}</h1>
      <h3>{details.notes}</h3>
      {DisplayPokemon}
    </div>
  )
}

export default TeamDetails