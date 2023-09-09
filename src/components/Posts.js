import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SidebarBlog from "./SidebarBlog";
import Articles from "./Articles";
import "../style/styles.css";

const Posts = () => {
  return (
    <div>
      <Container fluid>
        <hr />
        <Row>
          <Col>
            <h3>Popular Posts</h3>
          </Col>
          <Col>
            <h3>Latest Posts</h3>
          </Col>
          <Col>
            <h3>Relevant Articles</h3>
          </Col>
        </Row>
        <hr />

        <Row className="Post py-4">
          <Col className="LatestPost">
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
          </Col>
          <Col className="LatestPost">
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
            <SidebarBlog />
          </Col>
          <Col>
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
