import React from "react";
import blog1 from "./img/blog1.jpg";
import blog2 from "./img/blog2.jpg";
import { Row, Col } from "react-bootstrap";

const SidebarBlog = () => {
  return (
    <div>
      <Row>
        <Col sm={4}>
          <img className="w-100" src={blog1} alt="Blog Topic" />
        </Col>
        <Col sm={8}>
          <p>
            Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s
            Guide
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={4}>
          <img className="w-100" src={blog2} alt="Blog Topic" />
        </Col>
        <Col sm={8}>
          <p>Why is My House So Dusty? 5 Easy Ways to Eliminate Dust</p>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default SidebarBlog;
