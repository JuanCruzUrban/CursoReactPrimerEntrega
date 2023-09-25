import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <div className='Navbar'>
<ul>

<li>
<a href="./App.jsx">home</a>    
</li>

<li>
<a href="./App.jsx">Contacto</a> 
</li>

<li>
<a href="./App.jsx">Producto</a> 
</li>

<li>

<CartWidget/>

</li>

</ul>


    </div>
  )
}

export default Navbar