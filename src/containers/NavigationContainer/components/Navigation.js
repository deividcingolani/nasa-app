import React, { useEffect } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import config from "../../../auth_config.json";
import Navbar from "../../../components/NavBar/NavBar";

//TODO improve with save cookies fot authentification
const Navigation = ({ navbarState, handleNavBar }) => {
  var options = {
    domain: config.domain,
    client_id: config.clientId,
    cacheLocation: "localStorage",
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
