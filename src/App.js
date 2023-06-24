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
    { id: uuid(), marca: "Nike", modelo: "Air Max 90", talles: [37, 38, 39, 40, 41], precio: 2500, urlImagen: "https://drive.google.com/uc?export=view&id=1W06wHscP-ysAyH46vgYWiedxCd7qbSEO" },
    { id: uuid(), marca: "Converse", modelo: "Chuck All Star", talles: [35, 36, 37, 38, 39, 40, 41, 42, 43], precio: 1800, urlImagen: "https://drive.google.com/uc?export=view&id=1HUAnCoCjiva1OhPvRb_SoFj4EV6qyWRK" },
    { id: uuid(), marca: "Vans", modelo: "Old Skool", talles: [36, 37, 38, 39, 40, 41], precio: 2200, urlImagen: "https://drive.google.com/uc?export=view&id=1RTLQt1ClgM_k0WHwsltCAYFIvtoaLyGj" },
    { id: uuid(), marca: "Adidas", modelo: "Superstar", talles: [36, 37, 38, 39, 40, 41, 42, 43], precio: 2000, urlImagen: "https://drive.google.com/uc?export=view&id=1wuGNkDhsotDSRlghQ7n8aIyzt2pAqWI_" },
    { id: uuid(), marca: "Puma", modelo: "Suede Classic", talles: [35, 36, 37, 38, 39, 40], precio: 1900, urlImagen: "https://drive.google.com/uc?export=view&id=1FfHUu8VHBD20lwZJClNUwh4ZzVNQG3ZF" },
    { id: uuid(), marca: "New Balance", modelo: "574", talles: [37, 38, 39, 40, 41], precio: 2300, urlImagen: "https://drive.google.com/uc?export=view&id=1ovJBGkYKgoaDjGqHPEnOtB4ujdUnzMik" },
    { id: uuid(), marca: "Reebok", modelo: "Classic Leather", talles: [36, 37, 38, 39, 40, 41, 42, 43], precio: 2100, urlImagen: "https://drive.google.com/uc?export=view&id=1G8nYVrRm2fps6wraa0VG2QGYRBO1PUoi" },
    { id: uuid(), marca: "Under Armour", modelo: "Phantom", talles: [38, 39, 40, 41, 42, 43], precio: 2800, urlImagen: "https://drive.google.com/uc?export=view&id=1iEYIpbOxnJHU4tMQrtR8Nw5U5ikdhYS2" },
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
      <Header changuito={changuito} key={productos[0].id} agregarProducto={agregarProducto} />
      <ProductosDestacados listaProductos={productos} />
      <ListaDeProductos listaProductos={productos} changuito={changuito} agregarProducto={agregarProducto} />
      <Footer />
    </>
  );
}

export default App;
