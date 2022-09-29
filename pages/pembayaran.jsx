import NavbarComp from "../component/navbarcomp"
import Footer from "../component/footer"

const Pembayaran = () => {
  return (
    <div>
        <NavbarComp/>
        <div className="container pb-5 after-navbar ">
            <p className="text-center green-font fs-2 fw-bold pb-4">Pembayaran</p>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '5px'}} className="yellow-font p-5">
                <div className="black-font">
                    <p className="fs-5">Pembayaran: BRI</p>
                    <p className="fs-5">Nomor Virtual Account Billing:</p>
                    <p className="fs-2 text-center">0808080808</p>
                </div>
            </div>
            <div className="py-5 d-flex justify-content-end">
            <button className="button-search px-5 py-1 green-background fw-semibold" >Bayar</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Pembayaran