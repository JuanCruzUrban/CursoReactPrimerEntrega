import { useState } from "react";
import "./ItemCount.css"
import React from 'react'

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0)

  const handleSumar = () => {
    cantidad >= 0 && setCantidad(cantidad + 1)
  }
  
  const handleRestar = () =>{
        cantidad > 0 && setCantidad(cantidad - 1)  
  }

    return (
        <div className="btnAgregarAlCarro">
           <div className="btnAgregarSacar">
           
        <button className="buttonMas" onClick={handleSumar}>+</button>
        <p className="cantidadNum">{cantidad}</p>
        <button className="buttonMenos" onClick={handleRestar}>-</button>
        
           </div>
           <button className="agregar">Agregar Al Carrito</button>
            </div>
  )
}

export default ItemCount