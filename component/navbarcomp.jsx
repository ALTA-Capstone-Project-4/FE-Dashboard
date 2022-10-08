import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComp() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow-sm p-3  bg-body rounded fw-semibold fixed-top"
      >
        <Container className="px-0">
          <Navbar.Brand href="#home">
            <p className="yellow-font">
              <span className="green-font">WARE</span>HOUSE
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/">
                <p className="yellow-font-hover">Beranda</p>
              </Nav.Link>
              <Nav.Link href="#about">
                <p className="yellow-font-hover">Tentang Kami</p>
              </Nav.Link>
              <Nav.Link href="#mitra">
                <p className="yellow-font-hover">Menjadi Mitra</p>
              </Nav.Link>
              <Nav.Link href="#penitip">
                <p className="yellow-font-hover">Menjadi Customer</p>
              </Nav.Link>
              <Nav.Link href="/login">
                <p className="yellow-font-hover">Masuk</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp