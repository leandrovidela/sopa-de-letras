import React, { useEffect, useState } from "react";
import { Game } from "./Game";

export const WordFind = ({ wordFindSelected }) => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState([]);

  const keyword = "oie";
  const firstLetterKeyword = keyword.charAt(0).toUpperCase();
  const keywordLessLetter = keyword.length - 1;

  let wordResults = [];
  let word = "";

  let positionWordResults = [];
  let positionWord = [];

  const validateData = y => {
    if (y + 1 >= keyword.length) {
      if (word === keyword.toUpperCase()) {
        wordResults.push(word);
        positionWordResults.push(positionWord);
        setCount(wordResults.length);
        setPosition(positionWordResults);
      }
      word = "";
      positionWord = [];
    }
  };

  const filterSearch = (i, j) => {
    // Iquierda -> Derecha
    for (let y = 0; y < keyword.length; y++) {
      word += wordFindSelected[i][j + y];
      let calc1 = i * wordFindSelected.length;
      let calc2 = j + y + 1;
      positionWord[y] = calc1 + calc2;
      validateData(y);
    }

    // Derecha -> Izquierda
    for (let y = 0; y < keyword.length; y++) {
      word += wordFindSelected[i][j - y];
      let calc1 = i * wordFindSelected.length;
      let calc2 = j - y + 1;
      positionWord[y] = calc1 + calc2;
      validateData(y);
    }

    // Arriba -> Abajo
    if (i + keywordLessLetter < wordFindSelected.length) {
      // Arriba -> Abajo
      for (let y = 0; y < keyword.length; y++) {
        word += wordFindSelected[i + y][j];
        let calc1 = (i + y) * wordFindSelected[0].length;
        let calc2 = j + 1;
        positionWord[y] = calc1 + calc2;
        validateData(y);
      }

      // Arriba -> Abajo & Derecha -> Izquierda
      for (let y = 0; y < keyword.length; y++) {
        word += wordFindSelected[i + y][j + y];

        let calc1 = (i + y) * wordFindSelected[0].length;
        let calc2 = j + y + 1;
        positionWord[y] = calc1 + calc2;
        validateData(y);
      }

      // Arriba -> Abajo & Izquierda -> Derecha
      for (let y = 0; y < keyword.length; y++) {
        word += wordFindSelected[i + y][j - y];
        let calc1 = (i + y) * wordFindSelected[0].length;
        let calc2 = j - y + 1;
        positionWord[y] = calc1 + calc2;
        validateData(y);
      }
    }

    // Abajo-> Arriba
    if (i >= keywordLessLetter) {
      // Abajo-> Arriba
      for (let y = 0; y < keyword.length; y++) {
        word += wordFindSelected[i - y][j];
        let calc1 = (i - y) * wordFindSelected[0].length;
        let calc2 = j + 1;
        positionWord[y] = calc1 + calc2;
        validateData(y);
      }

      // Abajo -> Arriba && Derecha -> Izquierda
      for (let y = 0; y < keyword.length; y++) {
        word += wordFindSelected[i - y][j + y];
        let calc1 = (i - y) * wordFindSelected[0].length;
        let calc2 = j + y + 1;
        positionWord[y] = calc1 + calc2;
        validateData(y);
      }

      // Abajo -> Arriba && Izquierda -> Derecha
      for (let y = 0; y < keyword.length; y++) {
        word += wordFindSelected[i - y][j - y];
        let calc1 = (i - y) * wordFindSelected[0].length;
        let calc2 = j - y + 1;
        positionWord[y] = calc1 + calc2;
        validateData(y);
      }
    }
  };

  const startGame = () => {
    for (let i = 0; i < wordFindSelected.length; i++) {
      for (let j = 0; j < wordFindSelected[i].length; j++) {
        if (wordFindSelected[i][j] === firstLetterKeyword) {
          filterSearch(i, j);
        }
      }
    }
  };

  useEffect(() => {
    setCount(0);
    setPosition([]);
    startGame();
  }, [wordFindSelected]);

  return <Game vector={wordFindSelected} positions={position} count={count} />;
};
