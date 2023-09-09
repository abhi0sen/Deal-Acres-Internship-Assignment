import React from "react";
// import home from "./img/home.jpg";
import { Container, Row, Col } from "react-bootstrap";
import SidebarBlog from "./SidebarBlog";
import seller from "./img/seller.jpg";
import "../style/styles.css";

const Sidebar = () => {
  return (
    <div>
      <Container fluid className="Sidebar p-3">
        <Row>
          <Col>
            <button>RENTAL</button>
          </Col>
          <Col>
            <button>HOME DECOR</button>
          </Col>
        </Row>

        <Row>
          <Col>
            <button>DELHI NCR</button>
          </Col>
          <Col>
            <button>HELP GUIDE</button>
          </Col>
        </Row>

        <Row>
          <Col>
            <button>CONSTRUCTION</button>
          </Col>
          <Col>
            <button>LIFESTYLE</button>
          </Col>
        </Row>

        <Row>
          <Col>
            <button>TRENDS</button>
          </Col>
          <Col>
            <button>CO-WORKATION</button>
          </Col>
        </Row>
        <button>LEGAL AND TAXATION</button>
        <button>PACKERS AND MOVERS</button>
        <button>RETAIL AND HOSPITALITY</button>
      </Container>

      <div className="text-center home my-3">
        <span>Start your home search on Deal Acres</span>
        <br />
        <button className="btn-sm">Get Started</button>
      </div>

      <Container className="Sidebar py-3">
        <Row>
          <Col>
            <h3> You might also like </h3>
          </Col>
        </Row>
        <hr />
        <SidebarBlog />
        <SidebarBlog />
        <SidebarBlog />
        <SidebarBlog />
      </Container>
      <img className="w-100 py-4" src={seller} alt="Seller and Buyer" />
    </div>
  );
};

export default Sidebar;
