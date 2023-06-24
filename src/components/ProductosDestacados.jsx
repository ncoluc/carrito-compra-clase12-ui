import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Row } from "react-bootstrap";

const ProductosDestacados = ({ listaProductos }) => {
  return (
    <>
      <Container id="productosDestacados" style={{ paddingTop: "100px" }}>
        <h3>Lo más vendido!!</h3>
        <Row>
          <Col xs={6} md={4}>
            <Image src={listaProductos[4].urlImagen} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={listaProductos[0].urlImagen} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={listaProductos[5].urlImagen} thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductosDestacados;
