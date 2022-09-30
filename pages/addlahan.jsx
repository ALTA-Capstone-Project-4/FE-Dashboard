import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ComEditLahan from '../component/comeditlahan';
import Footer from '../component/footer';
import NavbarComp from '../component/navbarcomp';
import Sidebar from '../component/sidebar';

const addlahan = () => {
  return (
    <div>
        <NavbarComp />
        <Row className="gx-0 min-vh-100 addlahan">
            <Col lg={4}>
                <div className='sdbr'>
                    <Sidebar />
                </div>
            </Col>
            <Col lg={8}>
                <ComEditLahan className='comedit' />
            </Col>
        </Row>

        <Footer />
    </div>
  )
}

export default addlahan