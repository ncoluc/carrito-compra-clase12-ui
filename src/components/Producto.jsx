import React from "react";
import { v4 as uuid } from "uuid";

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  const { id, marca, modelo } = producto;

  const seleccionarProducto = (id) => {
    var producto = productos.filter((producto) => producto.id === id)[0];
    producto.id = uuid();
    agregarProducto([...changuito, producto]);
    console.log(producto);
    console.log("Producto agregado");
    console.log(changuito);
  };

  //Funcion para borrar producto
  const eliminarProducto = (id) => {
    agregarProducto(changuito.filter((producto) => producto.id !== id));
  };
  

  return (
    <>
      {id} | {marca} | {modelo}
      <br></br>
      {
        productos ? (
            <button type="button" onClick={() => seleccionarProducto(id)}>
            Comprar
            </button>
        ) : (
            <button type="button" onClick={() => eliminarProducto(id)}>
            Eliminar
            </button>
        )
      }
      <br />
    </>
  );
};

export default Producto;
