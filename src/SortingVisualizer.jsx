import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import InsertionSort, {
  bubbleSort,
  SelectionSort
} from "./sortingAlgorithm/allSortingAlgrithms";

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

  //helper function to perform animation
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //for generating new array
  function generateNewArray() {
    // console.log("clicked");
    resetArray();
  }

  //Inserion Sort Visualization
  async function performInsertionSort() {
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

        barOneStyle.backgroundColor = "red";
        barTwoStyle.backgroundColor = "red";
        await sleep(20);

        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
        await sleep(20);

        barOneStyle.backgroundColor = "turquoise";
        barTwoStyle.backgroundColor = "turquoise";
      }
    }
  }

  //Selection Sort Visualization
  async function performSelectionSort() {
    const objectArray = SelectionSort(array.slice());

    for (let i = 0; i < objectArray.length; i++) {
      for (let j = 0; j < objectArray[i].length; j++) {
        const { a: idx1, b: idx2 } = objectArray[i][j];
        const arrayBars = document.getElementsByClassName("array-bar");
        const barOneStyle = arrayBars[idx1].style;
        const barTwoStyle = arrayBars[idx2].style;

        barOneStyle.backgroundColor = "red";
        barTwoStyle.backgroundColor = "red";
        await sleep(50);

        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
        await sleep(50);

        barOneStyle.backgroundColor = "turquoise";
        barTwoStyle.backgroundColor = "turquoise";
      }
    }
  }

  async function performBubbleSort(){
    const {steps,sortedArray} = bubbleSort(array.slice());
    for (let i = 0; i < steps.length; i++) {
      for (let j = 0; j < steps[i].length; j++) {
        // console.log(objectArray[i][j]);
        const { a: idx1, b: idx2 } = steps[i][j];
        const arrayBars = document.getElementsByClassName("array-bar");
        const barOneStyle = arrayBars[idx1].style;
        const barTwoStyle = arrayBars[idx2].style;

        barOneStyle.backgroundColor = "red";
        barTwoStyle.backgroundColor = "red";
        await sleep(20);

        if(steps[i][j].swap){
          const temp = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
        }

        await sleep(20);

        barOneStyle.backgroundColor = "turquoise";
        barTwoStyle.backgroundColor = "turquoise";
      }
    }
    setArray(sortedArray);
  }

  //display original array in the console
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
        <button onClick={generateNewArray}> Generate New Array </button>
        <button onClick={performInsertionSort}>Insertion Sort</button>
        <button onClick={performSelectionSort}> Selection Sort</button>
        <button onClick={performBubbleSort}>Bubble Sort</button>
        <button onClick={ShowArray}> Show Original Array </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
