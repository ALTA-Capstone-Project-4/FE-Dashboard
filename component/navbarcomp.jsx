import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComp() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="shadow-sm p-3 mb-5 bg-body rounded fw-semibold">
      <Container className="px-0">
        <Navbar.Brand href="#home"><p className="yellow-font"><span className='green-font'>WARE</span>HOUSE</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#home"><p className="yellow-font">Home</p></Nav.Link>
            <Nav.Link href="#tentang-kami"><p className="yellow-font">Tentang Kami</p></Nav.Link>
            <Nav.Link href="#menjadi-mitra"><p className="yellow-font">Menjadi Mitra</p></Nav.Link>
            <Nav.Link href="#menjadi-client"><p className="yellow-font">Menjadi Client</p></Nav.Link>
            <Nav.Link href="#login"><p className="yellow-font">Login</p ></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComp