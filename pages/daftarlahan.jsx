import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../component/sidebar';
import Footer from '../component/footer';
import Router from 'next/router';
import NavbarMitra from '../component/navbar-mitra';

const DaftarLahan = () => {

  const tambahlahan = () => {
    Router.push({
      pathname: "/addlahan",
    });
  };

  return (
    <div>
        <NavbarMitra />
      <Row className="gx-0  min-vh-100 dflahan">
        <Col md={4} lg={4}>
          <div className="sdbr">
            <Sidebar />
          </div>
        </Col>
        <Col md={8} lg={8}>
            <div>
                <h3 className="favoritsaya">Daftar lahan</h3>
            </div>
            <div className='new'>
                <button type='button' className="tambah mb-4" onClick={tambahlahan}>Tambah Baru</button>
            </div>
          <Row className="contenmyfav">
            <Col>
              <div className="cardfav">
                <img className="gambarfav" />
                <p className="txtmf">Lahan 2x2M</p>
                <p className="txtmf">Rp.1.000.000</p>
                <div className='btndf'>
                <button className="btnpsndf">Edit</button>
                <button className="btnpsndf2">Hapus</button>
                </div>
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