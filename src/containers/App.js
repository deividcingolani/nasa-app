import React from "react";
import PrivateRoute from "../components/common/PrivateRoute";
import { Router, Switch, Route } from "react-router-dom";

import Navigation from "./NavigationContainer";
import ProjectsContainer from "./ProjectsContainer";
import HomeContainer from "./HomeContainer";

import history from "../utils/History";
import GlobalStyle from "../styles/Global";
//Todo: ADD SET COOKIES where Loading with Auth0

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <PrivateRoute
              exact
              path="/projects"
              component={ProjectsContainer}
            />
            <Route path="/" component={HomeContainer} />
          </Switch>
        </main>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
