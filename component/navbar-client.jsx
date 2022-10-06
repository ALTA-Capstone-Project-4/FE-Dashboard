import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { deleteCookie, getCookie } from "cookies-next";


const NavbarClient = () => {

  const name = getCookie("Name")

  const logout = () => {
    deleteCookie("Token");
    deleteCookie("Name");
    alert("berhasil logout")
  }

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow-sm p-3  bg-body rounded fw-semibold fixed-top"
      >
        <Container className="px-0">
          <Navbar.Brand href="/home">
            <p className="yellow-font">
              <span className="green-font">WARE</span>HOUSE
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll>
              <Nav.Link href="/home"><p className="yellow-font-hover">Beranda</p></Nav.Link>
              <Nav.Link href="/registermitra"><p className="yellow-font-hover">Menjadi Mitra</p></Nav.Link>
              <Nav.Link href="/"><p className="yellow-font-hover">Tentang Kami</p></Nav.Link>
              <Nav.Link><FontAwesomeIcon icon={faUserCircle} size="xl" className="yellow-font"/></Nav.Link>
                <NavDropdown  title={<span className="yellow-font-hover" alignRight>Hello, {name} </span>}>
                  <NavDropdown.Item href="/myfavorit" className="yellow-font-hover fw-semibold">Favorit</NavDropdown.Item>
                  <NavDropdown.Item href="/my-room" className="yellow-font-hover fw-semibold">Daftar Lahan</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/profilclient" className="yellow-font-hover fw-semibold">Akun</NavDropdown.Item>
                  <NavDropdown.Item href="/" className="yellow-font-hover fw-semibold" onClick={logout}>Keluar</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarClient