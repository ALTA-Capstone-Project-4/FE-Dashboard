import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Footer from '../component/footer';
import Sidebar from '../component/sidebar';
import dynamic from 'next/dynamic';

const detailgudang = () => {
    const NavbarMitra = dynamic(() => import("../component/navbar-mitra"), {
        ssr: false,
      });

  return (
    <div>
        <NavbarMitra />
        <Row className="gx-0  min-vh-100 cont">
            <Col lg={4}>
                <div className="sdbr">
                    <Sidebar />
                </div>
            </Col>
            <Col lg={8}>
                <Container>
                <div className='tainer'>
                    <h1 className="favoritsaya">Gudang Saya</h1>
                </div>
                <div className='tainer'>
                    <Row>
                                <h5>Spesifikasi Barang</h5>
                                <hr></hr>
                                <Col lg={8}>
                                    <div>
                                        <ul className='listli'>
                                            <li>Luas : 10 m2</li>
                                            <li>Panjang : 10 m</li>
                                            <li>Lebar : 1 m</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Tentang Lahan</h5>
                                        <ul className='listli'>
                                            <li>Berbentuk Ruangan bisa dikunci</li>
                                            <li>Khusus tempat penyimpanan berbentuk dokumen dan benda2 padat</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Barang yang tidak diizinkan dalam penitipan</h5>
                                        <ul className='listli'>
                                            <li>Benda yang dilarang oleh Undang-Undang</li>
                                            <li>Benda yang menimbulkan kerusakan pada khasanah atau bangunan</li>
                                        </ul>
                                    </div>
                                    <div className='fasili'>
                                        <h5>Fasilitas</h5>
                                        <ul className='listli2'>
                                            <li>Listrik</li>
                                            <li>CCTV</li>
                                            <li>Area Parkir</li>
                                            <li>Sumber Air</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="imgdetailgd">
                                        <img />
                                    </div>
                                    <h5 className='text-center mt-3'>Rp. 1.000.000/bulan</h5>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col lg={4} md={4}>
                                    <img className="imgdetailsewa" />
                                </Col>
                                <Col lg={8} md={8}>
                                    <ul className='listli'>
                                        <li style={{fontWeight: "bold"}}>Nama Penyewa : Yogas</li>
                                        <li>Dari Tanggal : 07/10/2022</li>
                                        <li>Ke Tanggal : 07/11/2022</li>
                                        <li>Barang yang dititipkan : Dokumen penting dan rahasia</li>
                                        <li>Alamat : Jalan aja kuy</li>
                                    </ul>
                                </Col>
                            </Row>
                </div>
                </Container>
            </Col>
        </Row>

        <Footer />
    </div>
  )
}

export default detailgudang