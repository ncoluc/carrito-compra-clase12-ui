import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Row } from "react-bootstrap";

const ProductosDestacados = ({ changuito }) => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://cdn4.buysellads.net/uu/1/81016/1609783170-authentic-260x200-variation-1.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://cdn4.buysellads.net/uu/1/81016/1609783170-authentic-260x200-variation-1.jpg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://cdn4.buysellads.net/uu/1/81016/1609783170-authentic-260x200-variation-1.jpg" thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductosDestacados;
