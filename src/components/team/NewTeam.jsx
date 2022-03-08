import React from 'react'
import { useNavigate } from 'react-router-dom'

function NewTeam() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/teams")
  }
  return (
    <div>
      <button onClick={goBack}>
      {'<'} Back
      </button>
      <h1>New Team</h1>
      <select>
        
      </select>
      <input type="text" />
      <input type="text" />
    </div>
  )
}

export default NewTeam