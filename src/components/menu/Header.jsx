import React, {useState} from 'react'
import Menu from './Menu'

function Header() {
  const [hidden, setHidden] = useState(true)
  const toggleMenu = () => setHidden(!hidden)
  
  return (
    <header>
      <p>Team Dex</p>
      <box-icon name="menu" size="lg" color="#222222" onClick={toggleMenu}></box-icon>
      <Menu hidden={hidden} toggleMenu={toggleMenu}/>
    </header>
  )
}

export default Header