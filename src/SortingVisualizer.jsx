import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import InsertionSort from "./sortingAlgorithm/allSortingAlgrithms";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArray() {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(randomInterval(5, 730));
    }
    setArray(arr);
    // console.log("reset button clicked");
  }
  useEffect(() => {
    resetArray();
  }, []);
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  function handleClick() {
    // console.log("clicked");
    resetArray();
  }
  async function clicked() {
    const objectArray = InsertionSort(array.slice());
    // console.log(objectArray);
    for (let i = 0; i < objectArray.length; i++) {
      for (let j = 0; j < objectArray[i].length; j++) {
        // console.log(objectArray[i][j]);
        const { a: idx1, b: idx2 } = objectArray[i][j];
        // console.log(idx1 + " " + idx2 + " " + swap);
        const arrayBars = document.getElementsByClassName("array-bar");
        const barOneStyle = arrayBars[idx1].style;
        const barTwoStyle = arrayBars[idx2].style;
        // setTimeout(() => {

        // }, i * 10);
        barOneStyle.backgroundColor = "red";
        barTwoStyle.backgroundColor = "red";
        await sleep(20);

        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
        await sleep(20);

        barOneStyle.backgroundColor = "turquoise";
        barTwoStyle.backgroundColor = "turquoise";
        // setTimeout(() => {

        // }, 50);
      }
    }
  }
  function ShowArray() {
    console.log(array);
  }

  return (
    <div>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          >
            {" "}
          </div>
        ))}
        <br />
        <button onClick={handleClick}> Click here </button>
        <button onClick={clicked}>Insertion Sort</button>
        <button onClick={ShowArray}> Show </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
