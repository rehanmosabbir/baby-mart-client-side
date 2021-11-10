import React from "react";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Baby Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/explore">
              <Button variant="link">Explore Product</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <Button variant="link">Home</Button>
            </Nav.Link>
          </Nav>

          {user?.email ? (
            <Nav>
              <Button onClick={logout} variant="warning">
                Logout
              </Button>
              <Nav.Link as={Link} to="/">
                {user.email}
              </Nav.Link>
            </Nav>
          ) : (
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Button variant="link">Login</Button>
            </NavLink>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
