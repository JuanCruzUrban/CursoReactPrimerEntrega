import { useState } from "react";
import "./ItemCount.css"
import React from 'react'

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(1)
  
  
    return (
        <div className="btnAgregarAlCarro">
           <div className="btnAgregarSacar">
           
        <button className="buttonMas">+</button>
        <p className="cantidadNum">{cantidad}</p>
        <button className="buttonMenos">-</button>
        
           </div>
           <button className="agregar">Agregar Al Carrito</button>
            </div>
  )
}

export default ItemCount