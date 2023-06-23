//import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";
import { v4 as uuid } from "uuid";

function App() {
  //Iniciamos nuestro local storage
  let changuitoGuardado = JSON.parse(localStorage.getItem("changuito")) || [];

  //Lista de productos
  const [productos, guardarProductos] = useState([
    {
      id: uuid(),       
      marca: "Nike",      
      modelo: "Air Max 90",      
      talles: [37, 38, 39, 40, 41],      
      precio: 2500,
    },
    {
      id: uuid(),     
      marca: "Converse",      
      modelo: "Chuck Taylor All Star",      
      talles: [35, 36, 37, 38, 39, 40, 41, 42, 43],      
      precio: 1800,
    },
    {
      id: uuid(),      
      marca: "Vans",      
      modelo: "Old Skool",      
      talles: [36, 37, 38, 39, 40, 41],      
      precio: 2200,
    },
  ]);

  //Carrito de compra
  const [changuito, agregarProducto] = useState(changuitoGuardado);

  //Hook useEffect: Sirve para ejecutar alguna funcionalidad cuando hay un cambio
  //en alguna variable/hook/situacion
  useEffect(() => {
    localStorage.setItem("changuito", JSON.stringify(changuito));
  }, [changuito]);

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
        key={productos[0].id}
        agregarProducto={agregarProducto}
      />
      <Footer/>
    </>
  );
}

export default App;
