import React from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import config from "../../../auth_config.json";
import Navbar from "../../../components/NavBar/NavBar";

const Navigation = () => {
  var options = {
    auth: {
      redirectUrl: config.envEndpoint + "projects",
    },
  };
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0(options);

  return (
    <Navbar
      loginWithRedirect={loginWithRedirect}
      isAuthenticated={isAuthenticated}
      logout={logout}
    />
  );
};

export default Navigation;
