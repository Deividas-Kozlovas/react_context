import React from "react";
import "./Home.scss";
import { Container, Row, Col, Button } from "react-bootstrap"; // Removed Jumbotron
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <Container fluid className="bg-light py-5">
        <Row>
          <Col className="text-center">
            <h1 className="display-4">Welcome to the Dog Search Application</h1>
            <p className="lead">
              Discover a variety of dog breeds and their adorable images. Use
              our app to explore and learn more about your favorite furry
              friends.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/search">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <h2>About the App</h2>
            <p>
              This application allows you to explore different breeds of dogs by
              searching through a curated collection of images. Browse through
              the gallery, and find your next furry companion!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
