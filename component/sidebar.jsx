import React from 'react';
import { Card } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sideb">
      <nav className="sidebar navbar navbar-expand d-flex flex-column justify-content-left" id="side_nav">
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" alt="" style={{ height: '250px' }} className="sideimg" />
          </Card>
        </div>
        <div className="isisidebar">
          <div>
            <a href="/profilemitra">Akun Saya</a>
          </div>
          <div>
            <a href="/listlahan">Daftar Lahan</a>
          </div>
          <div>
            <a href="/tambahlahan">Tambah Lahan</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;