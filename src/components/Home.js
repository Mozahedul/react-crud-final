import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <div className="Home d-flex justify-content-center mt-4">
      <Jumbotron>
        <h1>React CRUD Complete project</h1>
        <p>
          This is a fully Create, Read, Update, and Delete project developed by
          React.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
