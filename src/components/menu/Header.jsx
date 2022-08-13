import React, {useState, useEffect} from 'react'
import Menu from './Menu'
import Logo from '../../assets/Logo.png'

function Header() {
  const [hidden, setHidden] = useState(true)
  const toggleMenu = () => setHidden(!hidden)

  useEffect(() => {
    window.addEventListener("scroll", () => setHidden(true))
  })
  
  return (
    <header>
      <img src={Logo} alt="" />
      <box-icon name="menu" size="lg" color="#fff" onClick={toggleMenu}></box-icon>
      <Menu hidden={hidden} toggleMenu={toggleMenu}/>
    </header>
  )
}

export default Header