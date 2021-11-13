import React, { useState } from "react";
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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
// import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, authError, loginUser, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <h1 className="text-dark mb-5">Please Login</h1>
            <form onSubmit={handleLoginSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Your Email"
                className="mb-3"
              >
                <FormControl
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Your Password"
                className="mb-3"
              >
                <FormControl
                  placeholder="Your Password"
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                />
              </FloatingLabel>
              <Button type="submit" variant="danger">
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="link">New User? Please Register</Button>
              </NavLink>
            </form>
            <p className="my-3">-------------or-------------</p>
            <Button onClick={handleGoogleSignIn} variant="danger">
              Google Sign In
            </Button>

            {isLoading && <Spinner animation="border" variant="primary" />}
            {user?.email && (
              <Alert variant="success">logged in successfully!!!</Alert>
            )}
            {authError && <Alert variant="danger">{authError}</Alert>}
          </Col>
          <Col item xs={12} md={6}>
            <img
              className="img-fluid mx-5"
              src="https://i.ibb.co/DDvRXFM/login.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
