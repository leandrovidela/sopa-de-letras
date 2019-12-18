import React from "react";
import { Boton } from "../../styles/button";

export const Button = ({ wordFindNumber, handleClick }) => (
  <Boton onClick={() => handleClick(wordFindNumber)}>
    Sopa de letras {wordFindNumber + 1}
  </Boton>
);
