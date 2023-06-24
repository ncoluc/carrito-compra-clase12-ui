import { useState } from "react";
import carrito from "../imagenes/carrito.png";
import { Table, Button, Container, Row, Col, Offcanvas } from "react-bootstrap";

const Changuito = ({ changuito, agregarProducto }) => {
  const totalChanguito = () => {
    const total = changuito.reduce((suma, producto) => suma + producto.precio, 0);
    return formatoPrecio(total);
  };

  const formatoPrecio = (monto) => {
    return monto.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  //Funcion para borrar producto
  const eliminarProducto = (id) => {
    agregarProducto(changuito.filter((producto) => producto.id !== id));
  };

  //Hook para ver chanquito
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listarProductos = (changuito) => {
    return changuito.map((producto, index) => (
      <tr key={producto.id}>
        <td>{index + 1}</td>
        <td>{producto.marca}</td>
        <td>{producto.modelo}</td>
        <td>{formatoPrecio(producto.precio)}</td>
        <td>
          <Button variant="danger" onClick={() => eliminarProducto(producto.id)}>
            Eliminar
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="nav-changuito">
        <div className="a-changuito">
          <Button variant="primary" onClick={handleShow}>
            <img src={carrito} alt="Carrito"></img>
            <p>{changuito.length}</p>
          </Button>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Total: {totalChanguito()}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                {changuito.length === 0 ? (
                  <p>No hay productos en el changuito</p>
                ) : (
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>{listarProductos(changuito)}</tbody>
                  </Table>
                )}
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Changuito;
