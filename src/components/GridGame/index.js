import React from "react";
import { ItemGridLetter } from "./../ItemGridLetter/";

export const GridGame = ({ stylesGrid, words }) => (
  <div className="wrapper-grid-wordfind">
    <div style={stylesGrid} id="grid-word-find">
      {words.map((el, i) => (
        <ItemGridLetter key={i}>{el}</ItemGridLetter>
      ))}
    </div>
  </div>
);
