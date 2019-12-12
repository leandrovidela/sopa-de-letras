import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import WordFind from "./WordFind";

const App = () => {
  const [wordFind, setWordFind] = useState({ resources: [] });

  const [callApi, setCallApi] = useState({
    loading: true,
    error: null
  });

  useEffect(() => {
    setCallApi({ loading: true, error: null });

    fetch("https://api.myjson.com/bins/o13pg")
      .then(response => response.json())
      .then(data => {
        setWordFind(data);
        setCallApi({ loading: false });
      })
      .catch(function(error) {
        setCallApi({ loading: false, error: error });
      });
  }, []);

  const [numWordFind, setNumWordFind] = useState("");

  const setNumberOfWordFind = n => {
    setNumWordFind(n);
  };

  if (callApi.error) {
    return `Error: ${callApi.error.message}`;
  }

  if (callApi.loading) {
    return <h5>Cargando juego</h5>;
  }

  return (
    <div className="api-wrapper">
      {wordFind.resources.length > 0 && (
        <main>
          <nav>
            {wordFind.resources.map((el, i) => (
              <Button
                key={i}
                wordFindNumber={i}
                handleClick={setNumberOfWordFind}
              />
            ))}
          </nav>
          <WordFind wordFindSelected={wordFind.resources[numWordFind]} />
        </main>
      )}
    </div>
  );
};

export default App;
