import React from "react";
import { ItemGridLetter } from "./../ItemGridLetter/";
import { WrapperGridWordFind, GridWordFind } from "./styles";

export const GridGame = ({ stylesGrid, words }) => (
  <WrapperGridWordFind>
    <GridWordFind style={stylesGrid}>
      {words.map((el, i) => (
        <ItemGridLetter key={i}>{el}</ItemGridLetter>
      ))}
    </GridWordFind>
  </WrapperGridWordFind>
);
