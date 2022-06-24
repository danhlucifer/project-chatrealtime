import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Row className="home__bg">
      <Col md={12}>
        <div className="ms-5 mt">
          <h1>Share the world with your friends</h1>
          <p>Chat App lets you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>

      {/* <Col md={6} className="home__bg">
      
      </Col> */}
    </Row>
  );
}

export default Home;
