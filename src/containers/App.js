import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import WordFind from "./WordFind";
import Loader from "../components/Loader";

const App = () => {
  const [callApi, setCallApi] = useState({
    loading: true,
    error: null,
    data: []
  });

  const [numWordFind, setNumWordFind] = useState(0);

  useEffect(() => {
    setCallApi({ loading: true, error: null });

    fetch("https://api.myjson.com/bins/o13pg")
      .then(response => response.json())
      .then(({ resources }) => {
        setCallApi({ loading: false, data: resources });
      })
      .catch(function(error) {
        setCallApi({ loading: false, error: error });
      });
  }, []);

  const setNumberOfWordFind = n => {
    setNumWordFind(n);
  };

  if (callApi.error) {
    return `Error: ${callApi.error.message}`;
  }

  if (callApi.loading) {
    return <Loader />;
  }

  return (
    <div className="api-wrapper">
      <main>
        <nav>
          {callApi.data.map((el, i) => (
            <Button
              key={i}
              wordFindNumber={i}
              handleClick={setNumberOfWordFind}
            />
          ))}
        </nav>
        <WordFind wordFindSelected={callApi.data[numWordFind]} />
      </main>
    </div>
  );
};

export default App;
