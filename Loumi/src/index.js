import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h1> Colocation de 4 pers </h1>

    <App />
    <tr>Elie girard (CDI)</tr>
    <tr>Elie girard (profession liberale)</tr>
    <h1> Revenu mensuel moyen </h1>
    <h2> garant (5206)</h2>
    <h2> candidat (6700)</h2>
    <td>
      <input onclick="myFunction()" type="button" value="Voir plus" />
    </td>
  </React.StrictMode>,
  rootElement
);
