import React, { useEffect } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import config from "../../../auth_config.json";
import Navbar from "../../../components/NavBar/NavBar";


const Navigation = ({ navbarState, handleNavBar }) => {
  var options = {
    auth: {
      redirectUrl: config.envEndpoint,
    },
  };
  useEffect(() => {
    document.title = "Projects | NASA";
  }, []);

  const { isAuthenticated, logout, loginWithRedirect } = useAuth0(options);
  return (
      <Navbar
        login={loginWithRedirect}
        isAuthenticated={isAuthenticated}
        logout={logout}
        navbarState={navbarState}
        handleNavbar={handleNavBar}
      />
  );
};

export default Navigation;
