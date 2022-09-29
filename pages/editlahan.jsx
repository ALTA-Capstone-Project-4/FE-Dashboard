import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ComEditLahan from '../component/comeditlahan';
import Footer from '../component/footer';
import NavbarComp from '../component/navbarcomp';
import Sidebar from '../component/sidebar';

const editlahan = () => {
  return (
    <div>
        <NavbarComp />
        <Row className="gx-0 min-vh-100">
            <Col lg={4}>
                <div className='sdbr'>
                    <Sidebar />
                </div>
            </Col>
            <Col lg={8}>
                <ComEditLahan />
            </Col>
        </Row>

        <Footer />
    </div>
  )
}

export default editlahan