import Footer from "../component/footer";
import dynamic from "next/dynamic";
const NavbarClient = dynamic(() => import("../component/navbar-client"), {
  ssr: false,
});
import Router, { useRouter } from "next/router";

const Pembayaran = () => {
  const router = useRouter();
  const data = router.query;

  const paid = () => {
    Router.push("/my-room");
  };

  const jumlah = new Number(data.grossAmount).toLocaleString("id-ID");
  const waktuTransaksi = new Date(data.transactionTime).toLocaleString("id-ID");
  const akhirTransaksi = new Date(data.transactionExpired).toLocaleString("id-ID");
  const pembayaran = new String(data.bank).toUpperCase();

  return (
    <div>
      <NavbarClient />
      <div className="container pb-5 after-navbar ">
        <p className="text-center green-font fs-2 fw-bold pb-4">Pembayaran</p>
        <div style={{ borderWidth: "2px", borderStyle: "solid", borderRadius: "5px" }} className="yellow-font p-5">
          <div className="black-font">
            <p className="fs-5">Pembayaran: {pembayaran}</p>
            <p className="fs-5">Jumlah: Rp. {jumlah}</p>
            <p className="fs-5">Waktu Transaksi: {waktuTransaksi}</p>
            <p className="fs-5">Batas Bayar: {akhirTransaksi}</p>
            <p className="fs-5">Nomor Virtual Account Billing:</p>
            <p className="fs-2 text-center">{data.billNumber}</p>
          </div>
        </div>
        <div className="py-5 d-flex justify-content-end">
          <button className="button-search px-5 py-1 green-background fw-semibold" onClick={paid}>
            Sudah Bayar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pembayaran;
