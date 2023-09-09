import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Mainsec from "./components/Mainsec";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import City from "./components/City";
import './style/styles.css'
import Books from "./components/Books";

function App() {
  return (
    <div>
      <Navbar />
      <Container fluid  className="App">
        <Row>
          <Col sm={9}>
            <Mainsec />
          </Col>
          <Col m={3}>
            <Sidebar />
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Posts />
          </Col>
        </Row>

        <Row>
          <Col>
            <Books />
          </Col>
        </Row>
        <Row>
          <Col>
            <City />
          </Col>
        </Row>
        <Row>
          <Col>
            <City />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
