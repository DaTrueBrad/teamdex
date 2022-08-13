import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Field, Formik } from 'formik'
import Swal from 'sweetalert2'
import {useCookies} from 'react-cookie'

function NewTeam() {
  const [games, setGames] = useState([])
  const [team, setTeam] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(["userID", "username"])
  const navigate = useNavigate()
  const goBack = () => navigate("/teams")
 
  const gameOptions = games.map((game, index) => {
    return <option value={game.id}>{game.name}</option>
  })

  useEffect(() => {
    axios.get('/allGames')
    .then((res) => {
      setGames(res.data)
    })
  },[])

  return (
    <div>
      <button onClick={goBack}>
      {'<'} Back
      </button>
      <h1>New Team</h1>
      <Formik
        initialValues={{
          game: "",
          name: "",
          notes: ""
        }}
        onSubmit={(values) => {
          values.team = team
          values.userID = cookies.userID
          console.log(values)
          axios.post('/api/newTeam', values)
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Your team has been saved! Now go add pokemon to it!'
            }).then((res) => {
              navigate('/teams')
            })
          })
          .catch(err => console.log(err.response.data))
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <Field as="select" name="game">
            <option selected="selected" hidden>
                Select an Option
              </option>
              {gameOptions}
            </Field>
            <Field type="text" name="name" placeholder="Name"/>
            <Field type="text"  name="notes" placeholder="Notes"/>
            <button type="submit" className="lg-btn">Save</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default NewTeam