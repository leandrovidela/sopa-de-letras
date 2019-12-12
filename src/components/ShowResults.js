import React from "react";

const ShowResults = ({ handleClickShowResults }) => (
  <div className="show-result">
    <button className="btn-show-results" onClick={handleClickShowResults}>
      mostrar resultados
    </button>
  </div>
);

export default ShowResults;
