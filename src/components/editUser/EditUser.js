import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contextApi/stateProvider";

const EditUser = () => {
  const [{ userCount }, dispatch] = useStateValue();
  const history = useHistory();

  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");

  const params = useParams();

  // this function handle the form update
  const updateHandler = (event) => {
    event.preventDefault();
    if (updateFirstName || updateLastName || updateEmail || updatePassword) {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          id: params.id,
          firstName: updateFirstName,
          lastName: updateLastName,
          email: updateEmail,
          password: updatePassword,
        },
      });

      setUpdateFirstName("");
      setUpdateLastName("");
      setUpdateEmail("");
      setUpdatePassword("");

      history.push("/view");
    } else {
      history.push("/view");
    }
  };

  return (
    <div className="CreateUser d-flex justify-content-center mt-4">
      <div className="col-xs-12 col-md-6">
        <Container>
          {userCount.map((item) =>
            item.id === params.id ? (
              <Form onSubmit={updateHandler} key={item.id}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={item.firstName}
                    onChange={(event) => setUpdateFirstName(event.target.value)}
                  />
                  <Form.Text
                    className="text-muted"
                    id="fNameErrMsg"
                  ></Form.Text>
                </Form.Group>

                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={item.lastName}
                    onChange={(event) => setUpdateLastName(event.target.value)}
                  />
                  <Form.Text
                    className="text-muted"
                    id="lNameErrMsg"
                  ></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={item.email}
                    onChange={(event) => setUpdateEmail(event.target.value)}
                  />
                  <Form.Text
                    className="text-muted"
                    id="emailNameErrMsg"
                  ></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    defaultValue={item.password}
                    onChange={(event) => setUpdatePassword(event.target.value)}
                  />
                  <Form.Text
                    className="text-muted"
                    id="pWordNameErrMsg"
                  ></Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Update User
                </Button>
                <Link className="btn btn-warning ml-2" to="/view">
                  Cancel
                </Link>
              </Form>
            ) : (
              (item = "")
            )
          )}
        </Container>
      </div>
    </div>
  );
};

export default EditUser;
