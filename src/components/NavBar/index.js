import React from "react";
import { Button } from "./../Button/";
import { Nav } from "./styles";

export const NavBar = ({ handleClickSetWordFind, state }) => (
  <Nav>
    {state.data.map((el, i) => (
      <Button key={i} wordFindNumber={i} handleClick={handleClickSetWordFind} />
    ))}
  </Nav>
);
