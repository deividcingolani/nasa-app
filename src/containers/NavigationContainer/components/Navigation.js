import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../../react-auth0-spa";
import config from "../../../auth_config.json";

//TODO: EMPROLIJAS ESTE CODIGO
const Navigation = () => {
  var options = {
    auth: {
      redirectUrl: config.envEndpoint + "projects",
    },
  };
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0(options);

  return (
    <>
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({ appState: { targetUrl: "/projects" } })
          }
        >
          Log in
        </button>
      )}
      <Link to="/">Home</Link>&nbsp;
      {isAuthenticated && (
        <span>
          <Link to="/projects">Nasa Projects</Link>&nbsp;
        </span>
      )}
    </>
  );
};

export default Navigation;
