import React from "react";
import Navbar from "../components/NavBar/NavBar";
import { Router } from "react-router-dom";
import history from "../utils/History";

export default {
  title: "NavBar",
};
export const Authenticated = () => (
  <Router history={history}>
    <Navbar
      login={() => console.log("Handle login")}
      isAuthenticated={true}
      logout={() => console.log("Handle logout")}
      navbarState={false}
      handleNavbar={() => console.log("Handle NavBar")}
    />
  </Router>
);

export const  unauthenticated = () => (
    <Router history={history}>
        <Navbar
            login={() => console.log("Handle login")}
            isAuthenticated={false}
            logout={() => console.log("Handle logout")}
            navbarState={false}
            handleNavbar={() => console.log("Handle NavBar")}
        />
    </Router>
);
