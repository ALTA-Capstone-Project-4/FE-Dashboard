import Footer from "../component/footer"
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const DetailLahanClient = () => {
  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });
  const router = useRouter();
  const [detail, setDetail] = useState([]);

  const getDetail = () => {
    axios
    .get(`https://group4.altaproject.online/lahan/${router.query.lahan_id}`, {
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`
      }
    })
    .then((response) => {
      setDetail(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getDetail();
  }, []);
  
  return (
    <div>
      <NavbarClient/>
      <div className="container after-navbar pb-5">
        <p className="text-center green-font fs-2 fw-bold">{detail.nama}</p>
        <div className="pb-5 pt-3">
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
                <p>: {detail.luas} m<sup>2</sup></p>
                <p>: {detail.panjang} m</p>
                <p>: {detail.lebar} m</p>
              </div>
            </div>
            <p className="fs-4 pt-4">Tentang Lahan</p>
            <p>{detail.deskripsi}</p>
            <p className="fs-4 pt-4">Barang Yang Tidak Diijinkan dalam Penitipan</p>
            <p>{detail.barang_tdk_diizinkan}</p>
            <p className="fs-4 pt-4">Fasilitas</p>
            <p>{detail.fasilitas}</p>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center">
              <img src={detail.foto_lahan} className="img-fluid" style={{ height: "16rem"}}/>
            </div>
            <p className="text-center fs-4 green-font">Rp. {detail.harga}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DetailLahanClient
