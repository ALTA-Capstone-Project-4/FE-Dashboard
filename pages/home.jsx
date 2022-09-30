import NavbarComp from "../component/navbarcomp";
import Footer from "../component/footer";
import { InputGroup, Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <NavbarComp />

      <div
        className="container-fluid d-flex justify-content-center align-items-center after-navbar"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/warehouse-interior-with-cardboard-boxes-racks_107791-1633.jpg?w=900&t=st=1664356525~exp=1664357125~hmac=1e2dfd478aed1381c9a78ec845956ab0d61b1092ff92ef8d747e9ff37ea3070e")`,
          height: "23rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <p className="fs-2 fw-bold white-font text-center">
            Mau Cari Tempat Penitipan?
          </p>
          <div className="container">
            <InputGroup>
              <Form.Control
                type="text" 
                placeholder="Cari.."
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
              <button className=" yellow-background-hover white-font button-search px-4 py-1 fw-bold">
                Cari
              </button>
            </InputGroup>
          </div>
        </div>
      </div>

      <p className="pt-5 fs-3 fw-bold yellow-font text-center">
        Gudang Yang Tersedia
      </p>

      <div className="container py-5 ">
        <div className="row d-flex">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Text>Ukuran Lahan</Card.Text>
                <Card.Text>Harga Lahan plg murah</Card.Text>
                <Button>Go Check</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
