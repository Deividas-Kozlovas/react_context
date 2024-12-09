import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white py-4">
      <Row>
        <Col className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Dog Search. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
