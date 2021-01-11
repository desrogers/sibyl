import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Details from "./Details";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/forecast/40.7127,-74.0059" />
        </Route>
        <Route exact path="/forecast/:location">
          <LandingPage />
        </Route>
        <Route exact path="/details/:location">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
