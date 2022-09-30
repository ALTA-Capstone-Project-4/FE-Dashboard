import React from 'react'

const sidebarr = () => {
  return (
    <div className="sideb mb-5">
      <nav className="sidebar navbar navbar-expand d-flex flex-column justify-content-left" id="side_nav">
        <div>
          <img className="gambarfav" />
        </div>
        <div className="isisidebar">
          <div>
            <a href="/profilecitra">Akun Saya</a>
          </div>
          <div>
            <a href="/myfavorit">Favorit Saya</a>
          </div>
          <div>
            <a href="/my-room">Daftar Lahan</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default sidebarr;