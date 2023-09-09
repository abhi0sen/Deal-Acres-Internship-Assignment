import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/styles.css";

const City = () => {
  let city1 = ["Bhiwani", "Ambala", "Jhajjar", "Panipat", "Sonepat", "Rewari", "Jind", "Bhiwani", "Ambala", "Jhajjar", "Panipat", "Sonepat", "Rewari", "Jind", "Bhiwani", "Ambala", "Jhajjar", "Panipat", "Sonepat", "Rewari", "Jind", "Faridabad", "Gurgaon", "Bhiwani"]

  let city2 = ["Kaithal", "Sirsa", "Faridabad", "Gurgaon", "Bhiwani", "Kurukshetra", "Yamunanagar", "Kaithal", "Sirsa", "Faridabad", "Gurgaon", "Bhiwani", "Kurukshetra", "Yamunanagar", "Kaithal", "Sirsa", "Faridabad", "Gurgaon", "Bhiwani", "Kurukshetra", "Yamunanagar", "Faridabad", "Gurgaon", "Bhiwani"] 

  let city3 = ["Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri", "Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri", "Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri", "Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri"] 

  let city4=["Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri", "Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri", "Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri", "Palwal", "Karnal", "Rohtak", "Fatehabad", "Panchkula", "Charkhi Dadri"];

  return (
    <div className="py-4 city">
      <h2>Search for homes by city</h2>
      <Container fluid>
        <Row>
          <Col>
            <ul>
              {city1.map((item, index) => (
                <li key={index}>Real Estate Agent in {item}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              {city2.map((item, index) => (
                <li key={index}>Real Estate Agent in {item}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              {city3.map((item, index) => (
                <li key={index}>Real Estate Agent in {item}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              {city4.map((item, index) => (
                <li key={index}>Real Estate Agent in {item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center">
      <Button className="button">View More Cities</Button>
      </div>
    </div>
  );
};

export default City;
