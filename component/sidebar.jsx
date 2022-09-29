import React from 'react';

const Sidebar = () => {
  return (
    <div className="sideb mb-5">
      <nav className="sidebar navbar navbar-expand d-flex flex-column justify-content-left" id="side_nav">
        <div>
          <img className="gambarfav" />
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