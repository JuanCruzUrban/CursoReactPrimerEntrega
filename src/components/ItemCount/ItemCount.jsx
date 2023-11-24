import { useContext, useState } from "react";
import "./ItemCount.css";
import React from "react";
import { ItemsContext } from "../../context/ItemsContext";

const ItemCount = () => {
 const { carrito, setCarrito } = useContext(ItemsContext);

  
  
  return (
    <div className="btnAgregarAlCarro">
      <div className="btnAgregarSacar">
        <button className="buttonMas" onClick={handleSumar}>
          +
        </button>
        <p className="cantidadNum">{cantidad}</p>
        <button className="buttonMenos" onClick={handleRestar}>
          -
        </button>
      </div>
      <button className="agregar" onClick={handleAgregar}>
        Agregar Al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
