import React from "react";
import Producto from "./Producto";
import "../styles/changuito.css";

const Changuito = ({ changuito }) => {
  return (
    <>
      <div className="changuito">
        <h3>Changuito de compras</h3>
        {changuito.map((producto) => (
          <Producto 
            key = {producto.id} 
            producto = {producto} 
          />
        ))}
      </div>
    </>
  );
};

export default Changuito;
