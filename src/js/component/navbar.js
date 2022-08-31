import React, {useState, useEffect} from "react";
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
const [screenWidth, setScreenWidth] = useState(window.innerWidth)


const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

useEffect(() => {

const changeWidth = () => {
  setScreenWidth(window.innerWidth)
}

window.addEventListener('resize', changeWidth)

return () => {
  window.removeEventListener('resize', changeWidth)
}

}, [])


return (
    <nav>

   {(toggleMenu || screenWidth > 500) && ( 

   <ul className="list">
  <li className="itemsL">Start Bootstrap</li>
    <li className="itemsM">Home</li> 
    <li className="itemsM">About</li>
    <li className="itemsM">Services</li>
    <li className="itemsM">Contacts</li>
    </ul>)}
<button className="btn" onClick={toggleNav}>
<FaBars/>
</button>
</nav>
  )
}

