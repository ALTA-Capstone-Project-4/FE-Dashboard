import Footer from "../component/footer"
import dynamic from "next/dynamic"

const DetailLahanClient = () => {
  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });
  
  return (
    <div>
      <NavbarClient/>
      <div className="container after-navbar pb-5">
        <p className="text-center green-font fs-2 fw-bold">Lahan 1</p>
        <div className="pb-5 pt-3">
        <button className="button-search px-5 py-1 green-background fw-semibold">Kembali</button>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="fs-4">Spesifikasi Lahan</p>
            <div className="row">
              <div className="col">
                <p>Luas</p>
                <p>Panjang</p>
                <p>Lebar</p>
              </div>
              <div className="col-12 col-md-6">
                <p>: 225m<sup>2</sup></p>
                <p>: 15 m</p>
                <p>: 15 m</p>
              </div>
            </div>
            <p className="fs-4 pt-4">Tentang Lahan</p>
            <p>Berbentuk Ruangan bisa dikunci, Khusus tempat penyimpanan berbentuk dokumen dan benda2 padat </p>
            <p className="fs-4 pt-4">Barang Yang Tidak Diijinkan dalam Penitipan</p>
            <p>Benda yang dilarang oleh Undang-Undang, Benda yang menimbulkan kerusakan pada khasanah atau bangunan</p>
            <p className="fs-4 pt-4">Fasilitas</p>
            <p>Security, Area Parkir, Listrik dan Sumber Air</p>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center">
              <img src="https://lzd-img-global.slatic.net/g/p/aebf69ac76a0abf0b3e05f42864b8dc2.jpg_720x720q80.jpg_.webp" className="img-fluid" style={{ height: "16rem"}}/>
            </div>
            <p className="text-center fs-4 green-font">Rp. 1.200.000</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DetailLahanClient