import {
  Alert,
  Col,
  Container,
  Row,
  Spinner,
  FormControl,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { authError, user, isLoading, registerUser } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }

    e.preventDefault();

    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1 className="text-primary">Register</h1>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Your Name"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Your Name"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Your Email"
                className="mb-3"
              >
                <FormControl
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Your Email"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Your Password"
                className="mb-3"
              >
                <FormControl
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Your Password"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Retype Your Password"
                className="mb-3"
              >
                <FormControl
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  placeholder="Retype Your Password"
                />
              </FloatingLabel>
              <Button type="submit" variant="primary">
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="link">Already Registered? Please Login</Button>
              </NavLink>
            </form>
          )}

          {isLoading && <Spinner animation="border" variant="primary" />}
          {user?.email && (
            <Alert variant="success">user created successfully!!!</Alert>
          )}
          {authError && <Alert variant="danger">{authError}</Alert>}
        </Col>
        <Col xs={12} md={6}>
          {/* <img style={{ width: "100%" }} src={login} alt="" /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
