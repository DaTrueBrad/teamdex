import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Team() {
  const [teams, setTeams] = useState([])
  const navigate = useNavigate()
  const newTeam = () => navigate("/teams/new")

  const displayTeams = teams.map((team, index) => {
    return (
      <div>
        <h3>{team.name}</h3>
        <p>{team.notes}</p>
        <button className="md-btn" onClick={() => navigate(`/myTeam/${team.id}`)}>View</button>
      </div>
    )
  })


  useEffect(() => {
    let id = 1
    axios.get(`/api/myTeams/${id}`)
    .then((res) => {
      setTeams(res.data.reverse())
    })
  }, [])

  return (
    <div>
      <h1>Teams</h1>
      <button className='lg-btn' onClick={newTeam}>Create new Team</button>
      <h2>My Teams</h2>
      {displayTeams}
    </div>
  )
}

export default Team