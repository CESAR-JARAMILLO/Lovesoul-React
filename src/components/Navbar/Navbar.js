import { useState } from 'react'
import './Navbar.css'
// import logo from '../../images/lovesoul.png'
import hamburger from '../../images/icons/icon-hamburger.svg'
import close from '../../images/icons/icon-close.svg'

function Navbar(props) {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
    props.onHamburgerClick(!isHamburgerClicked);
  };

  return (
    <nav>
      <a href='/' className="logo">LoveSoul</a>
      <img
        className="icon-toggle"
        src={isHamburgerClicked ? close : hamburger}
        alt="hamburger icon"
        onClick={handleHamburgerClick}
      />
      <ul className="links">  
        <li>
          <a href="/">about</a>
        </li>
        <li>
          <a href="/">careers</a>
        </li>
        <li>
          <a href="/">products</a>
        </li>
        <li>
          <a href="/">support</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar