import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ExploreProducts from "./pages/ExploreProducts/ExploreProducts";
import Home from "./pages/Home/Home/Home";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/explore">
          <ExploreProducts></ExploreProducts>
        </Route>
        <Route exact path="/purchase">
          <Purchase></Purchase>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
