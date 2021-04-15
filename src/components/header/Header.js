import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header d-flex justify-content-center">
      <div className="col-xs-12 col-md-10">
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React CRUD project</Navbar.Brand>
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
      </div>
    </div>
  );
};

export default Header;
