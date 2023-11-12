import React from 'react'
import "../../pages/Contacto"
import Contacto from '../../pages/Contacto'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
   
    <div>
    <footer >
        
         <ul className='ulFooter'>
          <Link to ={"/Contacto"}>Contactame</Link>
         </ul>

      
    </footer>
    </div>
    </>
  )
}

export default Footer