import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="Error404 d-flex justify-content-center mt-4">
      <div className="col-xs-12 col-md-6">
        <Container>
          <Jumbotron>
            <h1 className="text-danger">404! PAGE NOT FOUND.</h1>
            <p>
              The page you are looking for is not in the list. Please visit our
            </p>
            <p>
              <Link to="/" className="btn btn-primary">
                Home page
              </Link>
            </p>
          </Jumbotron>
        </Container>
      </div>
    </div>
  );
};

export default Error404;
