import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AppProvider } from "./context";
import Details from "./Details";
import Forecast from "./Forecast";
import Locations from "./Locations/Locations";

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/forecast/40.7127,-74.0059" />
          </Route>
          <Route path="/forecast/:location">
            <Forecast />
          </Route>
          <Route
            exact
            path="/details/:location"
            render={({ location }) => {
              const path = location.pathname.replace("details", "forecast");
              return <Redirect to={path} />;
            }}
          ></Route>
          <Route path="/details/:location/:date">
            <Details />
          </Route>
          <Route exact path="/locations">
            <Locations />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
