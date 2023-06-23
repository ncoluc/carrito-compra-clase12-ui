import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductosDestacados from "./components/ProductosDestacados";
import ListaDeProductos from "./components/ListaDeProductos";
import { v4 as uuid } from "uuid";

function App() {
  //Iniciamos nuestro local storage
  let changuitoGuardado = JSON.parse(localStorage.getItem("changuito")) || [];

  //Lista de productos
  const [productos] = useState([
    { id: uuid(), marca: "Nike", modelo: "Air Max 90", talles: [37, 38, 39, 40, 41], precio: 2500 },
    { id: uuid(), marca: "Converse", modelo: "Chuck Taylor All Star", talles: [35, 36, 37, 38, 39, 40, 41, 42, 43], precio: 1800 },
    { id: uuid(), marca: "Vans", modelo: "Old Skool", talles: [36, 37, 38, 39, 40, 41], precio: 2200 },
    { id: uuid(), marca: "Adidas", modelo: "Superstar", talles: [36, 37, 38, 39, 40, 41, 42, 43], precio: 2000 },
    { id: uuid(), marca: "Puma", modelo: "Suede Classic", talles: [35, 36, 37, 38, 39, 40], precio: 1900 },
    { id: uuid(), marca: "New Balance", modelo: "574", talles: [37, 38, 39, 40, 41], precio: 2300 },
    { id: uuid(), marca: "Reebok", modelo: "Classic Leather", talles: [36, 37, 38, 39, 40, 41, 42, 43], precio: 2100 },
    { id: uuid(), marca: "Under Armour", modelo: "HOVR Phantom", talles: [38, 39, 40, 41, 42, 43], precio: 2800 },
    { id: uuid(), marca: "ASICS", modelo: "Gel-Lyte III", talles: [36, 37, 38, 39, 40], precio: 2400 },
    { id: uuid(), marca: "Puma", modelo: "Classic V2", talles: [36, 37, 38, 43], precio: 2100 },
    { id: uuid(), marca: "Under Armour", modelo: "Dark Phantom", talles: [38, 39, 40, ], precio: 2800 },
    { id: uuid(), marca: "Nike", modelo: "Total 90", talles: [39, 40], precio: 2400 },
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
      <Header 
        changuito={changuito} key={productos[0].id} agregarProducto={agregarProducto}
      />


      <ProductosDestacados />
      <ListaDeProductos listaProductos={productos} changuito={changuito} agregarProducto={agregarProducto} />

      <Footer />
    </>
  );
}

export default App;
