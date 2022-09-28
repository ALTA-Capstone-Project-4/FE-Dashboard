import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarComp from '../component/navbarcomp';
import Sidebar from '../component/sidebar';
import Footer from '../component/footer';

const DaftarLahan = () => {
  return (
    <div>
        <NavbarComp />
      <Row className="gx-0  min-vh-100">
        <Col lg={4}>
          <div className="sdbr">
            <Sidebar />
          </div>
        </Col>
        <Col lg={8}>
            <div>
                <h3 className="favoritsaya">Daftar lahan</h3>
            </div>
            <div className='new'>
                <button className="tambah mb-4">Tambah Baru</button>
            </div>
          <Row className="contenmyfav">
            <Col>
              <div className="cardfav">
                <img className="gambarfav" />
                <p className="txtmf">Lahan 2x2M</p>
                <p className="txtmf">Rp.1.000.000</p>
                <button className="btnpsn">
                  Pesan Sekarang
                </button>
                <br />
                <button className="btnpsn2">Hapus</button>
              </div>
            </Col>
            <Col>
              <div className="cardfav">
                <img className="gambarfav" />
                <p className="txtmf">Lahan 2x2M</p>
                <p className="txtmf">Rp.1.000.000</p>
                <button className="btnpsn">Pesan Sekarang</button>
                <br />
                <button className="btnpsn2">Hapus</button>
              </div>
            </Col>
            <Col>
              <div className="cardfav">
                <img className="gambarfav" />
                <p className="txtmf">Lahan 2x2M</p>
                <p className="txtmf">Rp.1.000.000</p>
                <button className="btnpsn">Pesan Sekarang</button>
                <br />
                <button className="btnpsn2">Hapus</button>
              </div>
            </Col>
            <Col>
              <div className="cardfav">
                <img className="gambarfav" />
                <p className="txtmf">Lahan 2x2M</p>
                <p className="txtmf">Rp.1.000.000</p>
                <button className="btnpsn">Pesan Sekarang</button>
                <br />
                <button className="btnpsn2">Hapus</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default DaftarLahan;