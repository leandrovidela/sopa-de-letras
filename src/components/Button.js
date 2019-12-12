import React from "react";

const button = ({ wordFindNumber, handleClick }) => (
  <button onClick={e => handleClick(wordFindNumber)}>
    Sopa de letras {wordFindNumber + 1}
  </button>
);

export default button;
