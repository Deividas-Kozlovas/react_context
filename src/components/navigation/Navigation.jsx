import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigaiton = () => {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/search">
          Search
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigaiton;
