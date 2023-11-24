import { useContext, useState } from "react";
import "./ItemCount.css";
import React from "react";
import { ItemsContext } from "../../context/ItemsContext";

const ItemCount = ({ instrument }) => {
  const [cantidad, setCantidad] = useState(1);

  const { carrito, setCarrito } = useContext(ItemsContext);

  
  const handleSumar = () => {
    cantidad >= 1 && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleAgregar = () => {
    const itemAgregado = { ...instrument, cantidad };
    const nuevoCarrito = [...carrito];
    const estaEnCarro = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarro) {
      estaEnCarro.cantidad += cantidad;
      
    } else {
      nuevoCarrito.push(itemAgregado);
      
    }
    setCarrito(nuevoCarrito);
  };

console.log(carrito)
  
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
