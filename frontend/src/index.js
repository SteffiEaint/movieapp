import React from "react";
import { createRoot } from "react-dom/client"; 
import { Auth0Provider } from "@auth0/auth0-react";
import { MoviesProvider } from "./context/MoviesContext";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    redirect_uri={window.location.origin}
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </Auth0Provider>
);
