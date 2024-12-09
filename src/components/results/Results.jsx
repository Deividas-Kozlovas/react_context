import { useContext } from "react";
import DogDataContext from "../../contect/context";
import { Row, Col } from "react-bootstrap";

const Result = () => {
  const { dogData } = useContext(DogDataContext);

  return (
    <section>
      <Row className="g-3">
        {dogData.map((dog) => (
          <Col
            key={dog.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <img
              key={dog.id}
              src={dog.url}
              alt={`image-of-${dog.name}`}
              className="img-fluid rounded shadow" // Bootstrap classes for responsive and styled images
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Result;
