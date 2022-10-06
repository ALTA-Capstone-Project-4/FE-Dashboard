import React, {useState} from "react";
import Footer from "../component/footer";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "cookies-next"; 
import Router from "next/router";


const Checkout = () => {
  const data = useRouter();
  const NavbarClient = dynamic(() => import("../component/navbar-client"), {
    ssr: false,
  });

  const [startDate, setStartDate] = useState("");
  const [periode, setPeriode] = useState("");
  const [item, setItem] = useState("");
  const [payment, setPayment] = useState(0);
  const [itemImage, setItemImage] = useState(null);
  const id = data.query.lahan_id;


  const handleCheckout = () => {
    const formData = new FormData();
    formData.append("foto", itemImage);
    formData.append("nama_barang", item);
    formData.append("mulai_sewa", startDate);
    formData.append("periode", periode);
    formData.append("metode_pembayaran", payment);
    formData.append("lahan_id", id);

    axios
    .post("https://group4.altaproject.online/order",
    formData,
    {
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`
      }
    })
    .then((res) => {
      console.log(res);
      alert('berhasil checkout')
      // Router.push("/pembayaran")
    })
    .catch((err) => {
      alert('gagal');
    })
  }

  return (
    <div>
      <NavbarClient />
      <h3 className="favoritsaya marginnav">Transaksi</h3>
      <Row className="gx-0">
        <Col lg={4} className="mb-4">
          <div className="checkl">
            <div className="checkpic">
              <img src={data.query.foto_lahan} alt="" className="img-fluid" />
            </div>
            <div>
              <h5>{data.query.gudang}</h5>
              <h5>{data.query.lahan}</h5>
              <h5>Rp. {data.query.harga}</h5>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div className="checkr">
            <Row>
              <Col sm={6}>
                <Form className="mx-2" >
                  <Form.Group className="mb-4">
                    <Form.Label className="mb-0">Mulai Sewa</Form.Label>
                    <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="mb-0">Periode Sewa</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control placeholder="Masukkan jumlah bulan sewa" aria-describedby="basic-addon2"  onChange={(e) => setPeriode(e.target.value)}/>
                        <InputGroup.Text id="basic-addon2">Bulan</InputGroup.Text></InputGroup>
                   </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="mb-0">Nama Barang</Form.Label>
                    <Form.Control type="text" onChange={(e) => setItem(e.target.value)} />
                  </Form.Group>
                </Form>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-5">
                  <Form.Label className="mb-0">Foto Yang akan dititipkan</Form.Label>
                  <Form.Control type="file" onChange={(e) => setItemImage(e.target.files[0])}/>
                </Form.Group>
                <Form.Select aria-label="Default select example" onChange={(e) => setPayment(e.target.value)}>
                  <option>Metode Pembayaran</option>
                  <option value="BCA">BCA Transfer</option>
                  <option value="BRI">BRI Transfer</option>
                  <option value="BNI">BNI Transfer</option>
                </Form.Select>
              </Col>
            </Row>
            <div className="gas">
              {/* <h5 className="total">Total : Rp.</h5> */}
              <button className="btnpsna" onClick={handleCheckout}>Pesan</button>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Checkout;
