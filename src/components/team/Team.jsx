import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Team() {
  const navigate = useNavigate()
  const newTeam = () => {
    navigate("/teams/new")
  }

  return (
    <div>
      <h1>Teams</h1>
      <button className='lg-btn' onClick={newTeam}>Create new Team</button>
      <h2>My Teams</h2>
    </div>
  )
}

export default Team