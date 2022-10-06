import Footer from "../component/footer"
import dynamic from "next/dynamic"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";


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
        <div className="container after-navbar pb-5">
        <p className="green-font fs-2 fw-bold pb-4 text-center">Daftar Lahan</p>
        {myRoom.map((item) => {
          return(
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '5px'}} className="yellow-font p-2 row d-flex my-4">
            <div className="col m-2">
              <img src="https://lzd-img-global.slatic.net/g/p/aebf69ac76a0abf0b3e05f42864b8dc2.jpg_720x720q80.jpg_.webp" className="img-fluid" style={{ height: "16rem"}}/>
            </div>
            <div className="col  black-font">
              <p className="fs-4 fw-semibold green-font">{item.nama_lahan}</p>
              <p className="pt-1">Luas: {item.luas_lahan}</p>
              <p>Address: {item.alamat_gudang}</p>
              <p>Nama Gudang: {item.nama_gudang}</p>
              <p>Tanggal Mulai Sewa: {item.mulai_sewa}</p>
              <p>Tanggal Akhir Sewa: {item.akhir_sewa}</p>
            </div>
            <div className="col  black-font">
              <p className="fs-4 fw-semibold green-font">Barang Yang disimpan</p>
              <p className="pt-1"> Nama: {item.nama_barang}</p>
              <div className="pt-4 white-font text-center">
                { item.status_pembayaran === "paid" ?  <div className="button-search green-background py-1 mt-4">Status Pembayaran: {item.status_pembayaran}</div> :
                item.status_pembayaran === "pending" ?  <div className="button-search yellow-background py-1 mt-4">Status Pembayaran: {item.status_pembayaran}</div> : null}
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