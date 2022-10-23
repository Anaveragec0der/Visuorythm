import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import InsertionSort from "./sortingAlgorithm/insertionSort";

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
  }

  function handleClick() {
    // console.log("clicked");
    resetArray();
  }

  async function clicked() {
    const objectArray = InsertionSort(array.slice());
    
    for (let i = 0; i < objectArray.length; i++) {
      for (let j = 0; j < objectArray[i].length; j++) {
        const { a: idx1, b: idx2, swap } = objectArray[i][j];
        const arrayBars = document.getElementsByClassName("array-bar");
        const barOneStyle = arrayBars[idx1].style;
        const barTwoStyle = arrayBars[idx2].style;
        barOneStyle.backgroundColor = "red";
        barTwoStyle.backgroundColor = "red";
        await sleep(5);
        if(swap){
          const xOffsetA = arrayBars[idx1].getBoundingClientRect().left - arrayBars[idx2].getBoundingClientRect().left;
          const shiftA = xOffsetA*-1;
          const shiftB = xOffsetA;
          barOneStyle.setProperty('transform',`translateX(${shiftA}}px)`);
          barTwoStyle.setProperty('transform',`translateX(${shiftB}px)`);
          await sleep(200);
          barOneStyle.setProperty('transform','');
          barTwoStyle.setProperty('transform','');
          const temp = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }
        await sleep(5);
        barOneStyle.backgroundColor = "turquoise";
        barTwoStyle.backgroundColor = "turquoise";
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
