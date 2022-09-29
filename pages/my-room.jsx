import NavbarComp from "../component/navbarcomp"
import Footer from "../component/footer"
import Sidebar from "../component/sidebar"

const MyRoom = () => {
  return (
    <div>
        <NavbarComp/>
        <div className="row d-flex">
        <div className="col">
            <Sidebar/>
        </div>
        <div className="col">
        <p className="green-font fs-2 fw-bold pb-4">Daftar Lahan</p>
        <div style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '5px'}} className="yellow-font p-5">
            coba
        </div>
        </div> 
        </div>
        <div>

        </div>
        <Footer/>
    </div>
  )
}

export default MyRoom