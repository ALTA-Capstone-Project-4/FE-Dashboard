import React from 'react';
import NavbarComp from "../component/navbarcomp";
import Footer from "../component/footer";
import Image from "next/image";
import welcome from "../image/6159984.jpg";
import store from "../image/app-store.png";
import imgmitra from "../image/6159988.jpg";
import imgpenitip from "../image/6160010.jpg";
import { Button, Accordion, Container, Col, Row } from 'react-bootstrap';

const index = () => {
  return (
    <div>
      <NavbarComp/>
      <Container>
        <div style={{ height: "500px"}}>
        <Row>
          <Col sm="6">
            <h1 className='title'>Selamat datang di Warehouse</h1>
            <h4 className='sub-title'>Warehouse App merupakan aplikasi penyedia jasa penitipan barang. Semua barang bisa dititipkan lewat Warehouse App, dari yang paling kecil sampai yang paling besar.</h4>
            <div className='app-store'>
            <Image src={store} />
            </div>
          </Col>
          <Col sm="6">
            <Image src={welcome} width="552px" height="368px" />
          </Col>
        </Row>
        </div>
        <div style={{ height: "500px"}}>
        <Row>
        <Col sm="6">
          <Image src={imgmitra} width="450px" height="350px" />
        </Col>
        <Col sm="6">
          <h1 className='title'>Jadi Mitra</h1>
          <h4 className='sub-title'>Sebagai Mitra, cukup posting tempat penitipan dan berikan deskripsi tempat penitipan.</h4>
          <div className='mitra1'>
            <button className='btn1'>Jadi Mitra</button>
          </div>
        </Col>
      </Row>
      </div>
      <div style={{ height: "500px"}}>
      <Row>
        <Col sm="8">
        <h1 className='title text-end'>Titipkan Barangmu!</h1>
        <h4 className='sub-title text-end'>Mulai titipkan barangmu, nikmati fitur menarik yang tersedia di Warehouse kami!</h4>
        <div className='penitip1'>
        <button className='btn2'>Jadi Penitip</button>
        </div>
        </Col>
        <Col sm="4">
          <Image src={imgpenitip} width="342px" height="342px" />
        </Col>
      </Row>
      </div>
      <div style={{ height: "500px"}}>
        <h1 className='title text-center'>Tentang Kami</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Apa itu Warehouse?</Accordion.Header>
            <Accordion.Body>
              Warehouse App merupakan aplikasi penyedia jasa penitipan barang. Semua barang bisa dititipkan lewat Warehouse App, dari yang paling kecil sampai yang paling besar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bagaimana cara Warehouse mempertemukan Mitra dengan Client?</Accordion.Header>
            <Accordion.Body>
              Mitra Warehouse dapat menawarkan produk yang dia temukan untuk di bantu belikan dengan cara mempostingnya di aplikasi Warehouse supaya para Penitip dapat melihatnya.
              Jika Penitip tertarik dengan postingan Mitra Warehouse, maka Penitip dapat mengirimkan pesan dan menemui kesepakatan untuk bertransaksi.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bagaimana transaksi didalam Warehouse?</Accordion.Header>
            <Accordion.Body>
              Mitra Warehouse dan Penitip dapat saling bertransaksi melalui aplikasi pihak ketiga.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className='tanya'>
        <button className='btn3'>Tanya Kami</button>
        </div>
      </div>
      </Container>
      <Footer />
    </div>
  )
}

export default index;