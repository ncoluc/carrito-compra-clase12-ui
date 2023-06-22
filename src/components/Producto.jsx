import React from "react";

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  const { id, marca, modelo } = producto;

  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...changuito, producto]);
    console.log(producto);
    console.log("Producto agregado");
    console.log(changuito);
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
            <button type="button" onClick={() => seleccionarProducto(id)}>
            Eliminar
            </button>
        )
      }
      <br />
    </>
  );
};

export default Producto;
