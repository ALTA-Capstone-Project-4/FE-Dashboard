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
            <a href="/profilmitra">Akun Saya</a>
          </div>
          <div>
            <a href="/daftarlahan">Daftar Lahan</a>
          </div>
          <div>
            <a href="/detailgudang">Gudang Saya</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;