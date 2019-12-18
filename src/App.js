import React, { Fragment, useState, useEffect, useReducer } from "react";
import { NavBar } from "./components/NavBar/";
import { Button } from "./components/Button/";
import { WordFind } from "./containers/WordFind";
import { Loader } from "./components/Loader/";

function callApiReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state
      };
      break;
    case "success":
      return {
        ...state,
        loading: false,
        [action.field]: action.value
      };
      break;
    case "error":
      return {
        ...state,
        loading: false,
        data: []
      };
      break;
    default:
      break;
  }
  return state;
}

const initialState = {
  loading: true,
  error: null,
  data: []
};

const App = () => {
  const [state, dispatch] = useReducer(callApiReducer, initialState);

  const [numWordFind, setNumWordFind] = useState(0);

  useEffect(() => {
    dispatch({ type: "loading" });

    async function fetchData() {
      try {
        const response = await fetch("https://api.myjson.com/bins/o13pg");
        const data = await response.json();
        dispatch({ type: "success", field: "data", value: data.resources });
      } catch (error) {
        dispatch({ type: "error", field: "error", value: error });
      }
    }

    fetchData();
  }, []);

  const setNumberOfWordFind = n => {
    setNumWordFind(n);
  };

  if (state.error) {
    return `Error: ${state.error}`;
  }

  return (
    <Fragment>
      {state.loading ? (
        <Loader />
      ) : (
        <div className="api-wrapper">
          <NavBar state={state} handleClickSetWordFind={setNumberOfWordFind} />
          <WordFind wordFindSelected={state.data[numWordFind]} />
        </div>
      )}
    </Fragment>
  );
};

export default App;

// <nav>
// {state.data.map((el, i) => (
//   <Button
//     key={i}
//     wordFindNumber={i}
//     handleClick={setNumberOfWordFind}
//   />
// ))}
// </nav>
