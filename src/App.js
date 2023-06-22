//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";

function App() {

  //Lista de productos
  const [productos, guardarProductos] = useState([
    {
      id: 1,
      marca: "Nike",
      modelo: "Air Max 90",
      talles: [37, 38, 39, 40, 41],
      precio: 2500,
    },
    {
      id: 2,
      marca: "Converse",
      modelo: "Chuck Taylor All Star",
      talles: [35, 36, 37, 38, 39, 40, 41, 42, 43],
      precio: 1800,
    },
    {
      id: 3,
      marca: "Vans",
      modelo: "Old Skool",
      talles: [36, 37, 38, 39, 40, 41],
      precio: 2200,
    },
  ]);

  //Carrito de compra
  const [changuito, agregarProducto] = useState([]);

  return (
    <>
      <Header titulo="Carrito de compras" />

      <h1>LISTADO DE PRODUCTOSSS</h1>
      {productos.map((producto) => (
        <Producto 
          producto={producto} 
          productos={productos}
          key={producto.id}
          changuito={changuito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Changuito 
        changuito={changuito}
      />

      <Footer/>
    </>
  );
}

export default App;
