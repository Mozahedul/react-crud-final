import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">React Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/create" className="ml-4">
                Add User
              </NavLink>
              <NavLink to="/view" className="ml-4">
                View User
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
