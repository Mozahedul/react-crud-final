import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useStateValue } from "../../contextApi/stateProvider";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

const CreateUser = () => {
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  const firstNameHandle = (event) => {
    setFirstName(event.target.value);

    if (firstName.length >= 4 && firstName.length <= 19) {
      document.getElementById("fNameErrMsg").innerHTML = `${
        firstName.length + 1
      } Characters is accepted`;
      document.getElementById("fNameErrMsg").className = "text-success";
    } else {
      document.getElementById("fNameErrMsg").innerHTML = `${
        firstName.length + 1
      } Characters is not accepted`;
      document.getElementById("fNameErrMsg").className = "text-danger";
    }
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (
      firstName !== "" &&
      firstName.length >= 5 &&
      lastName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      dispatch({
        type: "ADD_USER",
        payload: {
          id: uuidv4(),
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      history.push("/view");
    } else {
      // if (firstName === "" || firstName.length < 5) {
      //   document.getElementById("fNameErrMsg").innerHTML = `${
      //     firstName === ""
      //       ? "Insert First Name Please!"
      //       : "First Name should be greater than 4 characters"
      //   }`;
      // }
      // if (lastName === "" || lastName.length < 5) {
      //   document.getElementById("lNameErrMsg").innerHTML = `${
      //     lastName === ""
      //       ? "Insert Last Name Please!"
      //       : "Last Name should be greater than 4 characters"
      //   }`;
      // }
      // if (email === "") {
      //   document.getElementById("emailNameErrMsg").innerHTML =
      //     "Insert email Please!";
      // }
      // if (password === "" || password.length < 5) {
      //   document.getElementById("pWordNameErrMsg").innerHTML = `${
      //     password === ""
      //       ? "Insert Password Please!"
      //       : "Password should be atleast 5 characters"
      //   }`;
      // }
      history.push("/create");
    }
  };

  return (
    <div className="CreateUser d-flex justify-content-center mt-4">
      <div className="col-xs-12 col-md-6">
        <Container>
          <Form onSubmit={submitHandle}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={firstNameHandle}
                type="text"
                placeholder="Enter First Name"
              />
              <Form.Text className="text-muted" id="fNameErrMsg"></Form.Text>
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(event) => setLastName(event.target.value)}
                type="text"
                placeholder="Enter Last Name"
              />
              <Form.Text className="text-muted" id="lNameErrMsg"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text
                className="text-muted"
                id="emailNameErrMsg"
              ></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
              />
              <Form.Text
                className="text-muted"
                id="pWordNameErrMsg"
              ></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create User
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default CreateUser;
