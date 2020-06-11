import React, { useState } from "react";
import PrivateRoute from "../components/common/PrivateRoute";
import { Router, Switch, Route } from "react-router-dom";

import Navigation from "./NavigationContainer";
import ProjectsContainer from "./ProjectsContainer";
import HomeContainer from "./HomeContainer";
import history from "../utils/History";
import GlobalStyle from "../styles/Global";
import styled from "styled-components";

const ContainerRender = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  height: ${(props) => (props.expandMobile ? "220px" : "5rem")};
  z-index: 50;
`;

const MainContainer = styled.div`
  flex-shrink: 1;
`;

function App() {
  const [navbarState, setNavbarState] = useState(false);
  const handleNavBar = () => {
    setNavbarState(!navbarState);
  };
  return (
    <div className="App">
      <Router history={history}>
        <ContainerRender>
          <HeaderContainer expandMobile={navbarState}>
            <Navigation handleNavBar={handleNavBar} navbarState={navbarState} />
          </HeaderContainer>
          <MainContainer>
            <Switch>
              <PrivateRoute
                exact
                path="/projects"
                component={ProjectsContainer}
              />
              <Route
                path="/"
                component={() => <HomeContainer navbarState={navbarState} />}
              />
            </Switch>
          </MainContainer>
        </ContainerRender>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
