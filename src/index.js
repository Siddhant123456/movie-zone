import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { FavoritesContextProvider } from "./store/FavoriteContext";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
