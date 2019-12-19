import React from "react";
import { TitleResults } from "./../TitleResults/";
import { BotonFilled } from "../../styles/button";
import { WrapperResults } from "./styles";

export const ShowResults = ({ handleClickShowResults, show, count }) => (
  <WrapperResults>
    <BotonFilled onClick={handleClickShowResults}>
      mostrar resultados
    </BotonFilled>
    {show && <TitleResults count={count} />}
  </WrapperResults>
);
