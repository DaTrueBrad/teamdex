import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to<br/>Team Dex</h1>
      <h2>The FREE<br/>Pokedex<br/>&<br/>Team Builder</h2>
      <p>Team Dex is a free pokedex and team builder. you are able to browse the pokedex without an account, but if you wish to build a team for a specific video game, then click the button below!</p>
      <button className='lg-btn'>Create Account</button>
      <p>If you do not wish to create an account, we are still happy to hav eyou here with us! Click below to browse our pokedex!</p>
      <Link to="/pokedex"><button className='lg-btn'>Browse</button></Link>
    </div>
  )
}

export default Home