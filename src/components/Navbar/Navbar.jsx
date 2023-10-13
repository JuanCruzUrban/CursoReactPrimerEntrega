import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='Navbar'>
 
<ul>

<Link to={"/"}>Home </Link>
<Link to = {"/contacto"}>Contacto</Link>
<Link to = {"/about"}> About </Link>
<CartWidget/>
</ul>


  </div>
    
   
    
    
    
    
    
    )
}

export default Navbar