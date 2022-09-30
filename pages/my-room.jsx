import NavbarComp from "../component/navbarcomp"
import Footer from "../component/footer"
import Sidebar from "../component/sidebar"


const MyRoom = () => {
  return (
    <div>
        <NavbarComp/>
        <div className="container-fluid row d-flex after-navbar">
        <div className="col-xl-4 ">
            <Sidebar/>
        </div>
        <div className="col-xl-8">
        <p className="green-font fs-2 fw-bold pb-4">Daftar Lahan</p>
        <div style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '5px'}} className="yellow-font p-2 row d-flex">
            <div className="col m-2">
              <img src="https://lzd-img-global.slatic.net/g/p/aebf69ac76a0abf0b3e05f42864b8dc2.jpg_720x720q80.jpg_.webp" className="img-fluid" style={{ height: "16rem"}}/>
            </div>
            <div className="col black-font">
              <p className="fs-4 fw-semibold green-font">Lahan 1</p>
              <p className="pt-1">Luas: 2m x 2m</p>
              <p>Address: Jl. Kupu-kupu malam</p>
              <p>Nama Gudang: Bang Ipul Warehouse</p>
              <p>Tanggal Mulai Sewa: 01-01-2021</p>
              <p>Tanggal Akhir Sewa: 01-02-2021</p>
            </div>
            <div className="col black-font">
              <p className="fs-4 fw-semibold green-font">Barang Yang disimpan</p>
              <p className="pt-1"> Nama: Kulkas</p>
              <div className="pt-4 white-font text-center">
              <div className="button-search yellow-background py-1">Status Sewa: Disewa</div>
              <div className="button-search yellow-background py-1 mt-4">Status Pembayaran: Dibayar</div>
              </div>
            </div>
        </div>
        </div> 
        </div>
     
        <Footer/>
    </div>
  )
}

export default MyRoom