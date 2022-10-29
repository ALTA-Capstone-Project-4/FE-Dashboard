import axios from "axios";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Footer from "../component/footer";


const MyRoom = () => {
  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });
  const [myRoom, setMyRoom] = useState([]);

  const getMyRoom = () => {
    axios
    .get("https://group4.altaproject.online/penitip/lahan", 
    {
      headers : { 
        Authorization: `Bearer ${getCookie("Token")}`
      }
    })
    .then((response) => {
      setMyRoom(response.data.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getMyRoom();
  }, []);

  

  return (
    <div>
        <NavbarClient/>
        <div className="container after-navbar pb-5 mb-5">
        <p className="green-font fs-2 fw-bold pb-4 text-center">Daftar Lahan</p>
        {myRoom?.map((item, index) => {
          const mulai = new Date(item.mulai_sewa).toLocaleDateString();
          const akhir = new Date(item.akhir_sewa).toLocaleDateString();
          return(
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '5px'}} className="yellow-font p-2 row d-flex my-4" key={index}>
            <div className="col m-2">
              <img src={item.foto_barang} className="img-fluid" style={{ height: "16rem"}}/>
            </div>
            <div className="col  black-font">
              <p className="fs-4 fw-semibold green-font">{item.nama_lahan}</p>
              <p className="pt-1">Luas: {item.luas_lahan} m<sup>2</sup></p>
              <p>Address: {item.alamat_gudang}</p>
              <p>Nama Gudang: {item.nama_gudang}</p>
              <p>Tanggal Mulai Sewa: {mulai} </p>
              <p>Tanggal Akhir Sewa: {akhir}</p>
            </div>
            <div className="col  black-font">
              <p className="fs-4 fw-semibold green-font">Barang Yang disimpan</p>
              <p className="pt-1"> Nama: {item.nama_barang}</p>
              <div className="pt-4 white-font text-center">
                { item.status_pembayaran === "paid" ?  <div className="button-search green-background py-1 mt-4">Status Sewa: Disewa</div> :
                item.status_pembayaran === "pending" ?  <div className="button-search yellow-background py-1 mt-4">Status Pembayaran: Menunggu Pembayaran</div> :
                item.status_pembayaran === "failed" ? <div className="button-search red-background py-1 mt-4">Status Sewa: Gagal Dibayar</div> : 
                item.status_pembayaran === "expired" ? <div className="button-search bg-primary py-1 mt-4">Status Sewa: Selesai Disewa</div>:null}
              </div>
            </div>
        </div>
          )
        })}
        </div>
        <Footer/>
    </div>
  )
}

export default MyRoom