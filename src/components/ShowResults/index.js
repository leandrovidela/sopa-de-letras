import React from "react";
import { BotonFilled } from "../../styles/button";

export const ShowResults = ({ handleClickShowResults }) => (
  <div className="show-result">
    <BotonFilled className="btn-show-results" onClick={handleClickShowResults}>
      mostrar resultados
    </BotonFilled>
  </div>
);
