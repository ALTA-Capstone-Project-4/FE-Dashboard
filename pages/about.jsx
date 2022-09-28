import Image from 'next/image';
import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import Footer from '../component/footer';
import NavbarComp from '../component/navbarcomp';
import imgabout from '../image/na_feb_10.jpg';

const about = () => {
  return (
    <div className='min-vh-100'>
        <div>
            <NavbarComp />
        </div>
        <Container>
            <Image src={imgabout} />
            <div style={{ height: "650px"}}>
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
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Mengapa dibutuhkan nomor yang terdaftar pada WhatsApp untuk register?</Accordion.Header>
                    <Accordion.Body>
                    Perlu diketahui aplikasi Warehouse belum menyediakan fitur chatting di dalam aplikasi. Maka dari itu Anda akan mendapatkan pesan dari Penitip melalui aplikasi Pihak Ketiga di luar aplikasi Warehouse. Aplikasi pihak ketiga yang kami support saat ini adalah WhatsApp.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Cara melaporkan penipuan atau kecurangan</Accordion.Header>
                    <Accordion.Body>
                    Jika calon Penitip ataupun Mitra lainnya telah melakukan kecurangan atau penipuan maka Anda dapat melaporkannya kepada customer service Warehouse. Caranya cukup mudah, Anda dapat e-mail ke admin@warehouse.com dengan subject “kecurangan” dan berikan penjelasan beserta screenshot jika dibutuhkan.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Cara menghubungi dan meminta bantuan customer service</Accordion.Header>
                    <Accordion.Body>
                    Jika calon Penitip ataupun Mitra telah mengalami kesulitan dalam penggunaan aplikasi Warehouse maupun menemukan hal yang tidak sesuai dengan ekspektasi Anda (error) maka Anda dapat melaporkannya kepada customer service Warehouse. Caranya cukup mudah, Anda dapat e-mail ke admin@warehouse.com dengan subject:
                    <br></br>
                    1. “Error” jika terdapat kejanggalan dalam aplikasi (bug).
                    <br></br>
                    2. “Pertanyaan” jika terdapat pertanyaan yang perlu Anda tanyakan terkait dengan penggunaan aplikasi Warehouse.
                    <br></br>
                    3. Serta berikan penjelasan beserta screenshot jika dibutuhkan.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        </Container>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default about