import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ExploreProducts from "./pages/ExploreProducts/ExploreProducts";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import Purchase from "./pages/Purchase/Purchase";
import UserOrders from "./pages/UserOrders/UserOrders";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/explore">
            <ExploreProducts></ExploreProducts>
          </Route>
          <PrivateRoute exact path="/purchase/:orderId">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute exact path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <UserOrders></UserOrders>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
