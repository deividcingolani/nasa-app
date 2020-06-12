import React from "react";
import Navigation from "../containers/NavigationContainer";
import { Route, Switch } from "react-router-dom";
import ProjectsContainer from "../containers/ProjectsContainer";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import PrivateRoute from "./common/PrivateRoute";

export const ContainerRender = styled.div`
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

const AppComponent = ({ expandMobile, handleNavBar, component }) => (
  <ContainerRender className="ContainerRender">
    <HeaderContainer expandMobile={expandMobile}>
      <Navigation handleNavBar={handleNavBar} navbarState={expandMobile} />
    </HeaderContainer>
    <MainContainer>
      <Switch>
        <PrivateRoute exact path="/projects" component={ProjectsContainer} />
        <Route path="/" component={component} />
      </Switch>
    </MainContainer>
  </ContainerRender>
);

ContainerRender.displayName = "ContainerRender";
AppComponent.propTypes = {
  expandMobile: PropTypes.bool,
  handleNavBar: PropTypes.func,
  component: PropTypes.func,
};

export default AppComponent;
