import React, { useContext } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Result from "../../components/results/Results";
import DogDataContext from "../../contect/context";

const Search = () => {
  const { dogBreeds, setSelectedBreedId } = useContext(DogDataContext);

  return (
    <section className="my-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex flex-column align-items-center"
          >
            <Form.Group controlId="dogBreedSelect">
              <Form.Label>Search for a dog by breed</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setSelectedBreedId(e.target.value);
                }}
                aria-label="Search for a dog by breed"
              >
                <option value="">Select a breed</option>
                {dogBreeds.map((breed) => (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Result />
    </section>
  );
};

export default Search;
