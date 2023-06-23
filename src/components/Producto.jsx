import React from "react";

const Producto = ({ producto }) => {
  const { marca, modelo, precio } = producto;

  return (
    <div>
      {marca} - {modelo} - {precio}
    </div>
  );
};

export default Producto;
