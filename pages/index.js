import React from 'react';
import NavbarComp from "../component/navbarcomp";
import Footer from "../component/footer";
import Image from "next/image";
import welcome from "../image/6159984.jpg";
import store from "../image/app-store.png";
import imgmitra from "../image/6159988.jpg";
import { Button, Accordion } from 'react-bootstrap';

const index = () => {
  return (
    <div>
      <NavbarComp/>
      <div>
        <h1>Selamat datang di Warehouse</h1>
        <h4>Warehouse App merupakan aplikasi penyedia jasa penitipan barang. Semua barang bisa dititipkan lewat Warehouse App, dari yang paling kecil sampai yang paling besar.</h4>
        <Image src={store} />
        <Image src={welcome} width="550px" height="625px" />
      </div>
      <div>
        <Image src={imgmitra} width="550px" height="625px" />
        <h1>Jadi Mitra</h1>
        <h4>Sebagai Mitra, cukup posting tempat penitipan dan berikan deskripsi tempat penitipan.</h4>
        <Button>Jadi Mitra</Button>
      </div>
      <div>
        <h1>Titipkan Barangmu!</h1>
        <h4>Mulai titipkan barangmu, nikmati fitur menarik yang tersedia di Warehouse kami!</h4>
        <Button>Jadi Client</Button>
      </div>
      <div>
        <h1>Tentang Kami</h1>
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
      </div>

      <Footer />
    </div>
  )
}

export default index;