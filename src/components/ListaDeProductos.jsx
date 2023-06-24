import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const ListaDeProductos = ({ listaProductos, changuito, agregarProducto }) => {
  const formatterTalles = (listaTalles) => {
    var stringTalles = "";
    for (let index = 0; index < listaTalles.length; index++) {
      const element = listaTalles[index];
      if (index === listaTalles.length - 1) stringTalles += element;
      else stringTalles += element + "/";
    }
    return stringTalles;
  };

  const formatoPrecio = (monto) => {
    return monto.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const seleccionarProducto = (id) => {
    let producto = listaProductos.find((producto) => producto.id === id);
    if (producto) { 
      let nuevoProducto = { ...producto };
      nuevoProducto.id = uuid();
      agregarProducto([...changuito, nuevoProducto]);
    }
  };

  return (
    <>
      <Container id="productos" style={{ paddingTop: "100px" }}>
        <h3>Nuestros Productos</h3>
        <Row>
          {listaProductos.map((producto) => (
            <Card border="dark" className="m-3 p-0" style={{ width: "18rem" }}>
              <Card.Img className="imagen-card" variant="top" src={producto.urlImagen} />
              <Card.Body>
                <Card.Title>
                  {producto.marca} - {producto.modelo}
                </Card.Title>
                <Card.Title>{formatoPrecio(producto.precio)}</Card.Title>
                <Card.Text>Talles: {formatterTalles(producto.talles)}</Card.Text>
                <Button type="button" onClick={() => seleccionarProducto(producto.id)}>
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListaDeProductos;
