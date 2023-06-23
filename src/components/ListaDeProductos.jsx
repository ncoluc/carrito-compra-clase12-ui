import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const ListaDeProductos = ({ listaProductos, changuito, agregarProducto }) => {
  const formatterTalles = (listaTalles) => {
    var stringTalles = "";
    for (let index = 0; index < listaTalles.length; index++) {
      const element = listaTalles[index];
      if (index == listaTalles.length - 1) stringTalles += element;
      else stringTalles += element + "/";
    }
    return stringTalles;
  };

  const seleccionarProducto = (id) => {
    let producto = listaProductos.filter((producto) => producto.id === id)[0];
    agregarProducto([...changuito, producto]);
  };

  return (
    <>
      <Container>
        <br></br>
        <br></br>
        <h3 id="productos">Nuestros Productos</h3>
        <Row>
          {listaProductos.map((producto) => (
            <Card className="m-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>
                  {producto.marca} - {producto.modelo}
                </Card.Title>
                <Card.Title>${producto.precio}</Card.Title>
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
