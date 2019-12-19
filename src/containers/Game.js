import React, { Fragment, useEffect, useState } from "react";
import { GridGame } from "./../components/GridGame/";
import { ShowResults } from "./../components/ShowResults/";
import { GridResults } from "./../components/GridResults";

export const Game = ({ vector, positions, count }) => {
  const [show, setShow] = useState(false);
  const [allWords, setAllWords] = useState([]);
  const [gridStyles, setGridSyles] = useState({
    gridTemplateColumns: ""
  });

  const printWords = () => {
    const words = [];
    for (let i = 0; i < vector.length; i++) {
      for (let j = 0; j < vector[i].length; j++) {
        words.push(vector[i][j]);
      }
    }
    setAllWords(words);
  };

  const showResultsInPuzzle = () => {
    const itemsGrid = document.querySelectorAll(".grid-item");

    itemsGrid.forEach((el, i) => {
      el.classList.remove("selected");
    });

    positions.forEach((element, i) => {
      for (let i = 0; i < element.length; i++) {
        itemsGrid[element[i] - 1].classList.add("selected");
      }
    });

    setShow(true);
  };

  useEffect(() => {
    document.querySelectorAll(".grid-item").forEach((el, i) => {
      el.classList.remove("selected");
    });

    printWords();

    setGridSyles({ gridTemplateColumns: `repeat(${vector[0].length}, 1fr)` });

    setShow(false);
  }, [vector]);

  return (
    <GridResults>
      {
        <Fragment>
          <GridGame stylesGrid={gridStyles} words={allWords} />
          <ShowResults
            show={show}
            count={count}
            handleClickShowResults={showResultsInPuzzle}
          />
        </Fragment>
      }
    </GridResults>
  );
};
