import React from "react";
import Slide from "./slide";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> Colocation de 4 personnes </h1>
      <tr> Elie girard (CDI)</tr>
      <tr> Elie girard (Profession liberale)</tr>
      <h1> Revenu mensuel moyen </h1>
      <div>
        <tr>
          <h1>Candidat = 5206 euros</h1>
        </tr>
        <tr>
          <h1>Garant= 6700 euros</h1>
        </tr>
      </div>

      <Slide />
    </div>
  );
}
