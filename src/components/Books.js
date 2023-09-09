import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import orange from "./img/orange.png";
import yellow from "./img/yellow.png";
import green from "./img/green.png";
import purple from "./img/purple.png";
import blue from "./img/blue.png";
import "../style/styles.css";

const Books = () => {
  return (
    <div className="Names py-4">
      <Container fluid>
        <Row>
          <Col className="Orange">
            <p>
              Buyer's <br />
              <span style={{ color: "#f6a05a" }}>Guide</span>
            </p>
            <img className="w-100" src={orange} alt="Buyer's Guide" />
          </Col>

          <Col className="Yellow">
            <p>
              Seller's <br />
              <span style={{ color: "#fdbd00" }}>Guide</span>
            </p>
            <img className="w-100" src={yellow} alt="Seller's Guide" />
          </Col>

          <Col className="Green">
            <p>
              Rental <br />
              <span style={{ color: "#95bd00" }}>Guide</span>
            </p>
            <img className="w-100" src={green} alt="Rental Guide" />
          </Col>

          <Col className="Purple">
            <p>
              Home <br />
              <span style={{ color: "#cb6ce6" }}>Interior</span>
            </p>
            <img className="w-100" src={purple} alt="Home Interior" />
          </Col>

          <Col className="Blue">
            <p>
              Home <br />
              <span style={{ color: "#38b6ff" }}>Vastu</span>
            </p>
            <img className="w-100" src={blue} alt="Home Vastu" />
          </Col>
        </Row>
      </Container>
      <a className="float-right px-4" href="/">
        View More &nbsp;<i className="bi bi-box-arrow-up-right"></i>
      </a>
    </div>
  );
};

export default Books;
