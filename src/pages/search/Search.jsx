import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import Result from "../../components/results/Results";
import DogDataContext from "../../contect/context";

const Search = () => {
  const { searchInput, setSearchInput } = useContext(DogDataContext);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <section>
      <Form
        onSubmit={(e) => e.preventDefault()}
        className="d-flex justify-content-center my-4"
      >
        <Form.Control
          type="text"
          placeholder="Search for a dog"
          value={searchInput}
          onChange={handleChange}
          className="mr-2"
        />
      </Form>
      <Result />
    </section>
  );
};
export default Search;
