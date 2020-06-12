import React, { useState } from "react";
import { Router } from "react-router-dom";

import HomeContainer from "./HomeContainer";
import history from "../utils/History";
import GlobalStyle from "../styles/Global";
import AppComponent from "../components/AppComponent";

function App() {
  const [navbarState, setNavbarState] = useState(false);
  const handleNavBar = () => {
    setNavbarState(!navbarState);
  };
  return (
    <div className="App">
      <Router history={history}>
        <AppComponent
          expandMobile={navbarState}
          handleNavBar={handleNavBar}
          component={() => <HomeContainer navbarState={navbarState} />}
        />
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
