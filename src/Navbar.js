import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id="style" className="py-3" fixed="top">
      <Container>
        <Navbar.Brand href="#/" className="fs-4 fw-bold" aria-label="BAD BANK Home">
          HOME
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/Create" className="fw-semibold">Create User</Nav.Link>
            <Nav.Link href="#/Deposit" className="fw-semibold">Deposit</Nav.Link>
            <Nav.Link href="#/Withdraw" className="fw-semibold">Withdraw</Nav.Link>
            <Nav.Link href="#/Alldata" className="fw-semibold">All Data</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
