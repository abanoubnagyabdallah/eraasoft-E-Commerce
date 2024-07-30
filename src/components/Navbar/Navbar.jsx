import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import {NavLink} from "react-router-dom"
function BasicExample() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-center align-items-center">
          <Nav className="me-auto">
            <NavLink className="nav_link" to="/">Home</NavLink>
            <NavLink className="nav_link" to="/Shop">Shop</NavLink>
            <NavLink className="nav_link" to="/Cart">Cart</NavLink>
          </Nav>
          <div>
            <Button variant="primary">Logout</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
