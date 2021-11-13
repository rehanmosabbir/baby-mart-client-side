import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div className="main-nav">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fs-3">
            <FontAwesomeIcon
              className="me-2 text-white"
              icon={faBabyCarriage}
            />
            Baby Mart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                <Button variant="link">Home</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/explore">
                <Button variant="link">Explore Product</Button>
              </Nav.Link>
            </Nav>

            {user?.email ? (
              <Nav>
                <NavLink
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button variant="link">Dashboard</Button>
                </NavLink>

                <Navbar.Text>
                  <Button className="mx-2" onClick={logout} variant="danger">
                    Logout
                  </Button>
                  Signed in as :{" "}
                  <a href="#login">{user?.displayName || user?.email}</a>
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png"
                    }
                    alt=""
                  />
                </Navbar.Text>
              </Nav>
            ) : (
              <>
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button variant="link">
                    Login{" "}
                    <FontAwesomeIcon
                      className=" text-white"
                      icon={faSignInAlt}
                    />
                  </Button>
                </NavLink>
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button variant="link">
                    Register{" "}
                    <FontAwesomeIcon className=" text-white" icon={faUser} />
                  </Button>
                </NavLink>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
