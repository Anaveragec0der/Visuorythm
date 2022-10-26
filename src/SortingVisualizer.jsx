import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import  {
  InsertionSort,
  bubbleSort,
  Heapify,
  HeapSort,
  SelectionSort
} from "./sortingAlgorithm/allSortingAlgrithms";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArray() {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(randomInterval(5, 100));
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
        await sleep(70);

        const temp = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = temp;
        await sleep(70);

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
        barOneStyle.backgroundColor="turquoise";
        barTwoStyle.backgroundColor="turquoise";
      }
    }
    setArray(sortedArray);
  }
  //Heap Sort Visualization
  async function performHeapSort() {
    let len = array.length;
    // console.log(len);
    // console.log(array);
    let heapifiedArrayAndSwappedIndexes = Heapify(array.slice(), len);
    let length = heapifiedArrayAndSwappedIndexes.length;
    // console.log(heapifiedArrayAndSwappedIndexes);
    const heapifiedArray = heapifiedArrayAndSwappedIndexes[length - 1];
    // const heapifiedArraylength = heapifiedArray.length;
    // console.log(heapifiedArray);
    // let heapifiedArray2 = heapifiedArray.slice();
    let onlyswappedIndexes = heapifiedArrayAndSwappedIndexes.slice(
      0,
      length - 1
    );
    // console.log(onlyswappedIndexes);
    const arrayOfObject = HeapSort(heapifiedArray, heapifiedArray.length);

    // animation for creation of heap
    let lengthOfSwappedIndexesArray = onlyswappedIndexes.length;
    for (let i = 0; i < lengthOfSwappedIndexesArray; i++) {
      const { idx1: index1, idx2: index2 } = onlyswappedIndexes[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      const barOneStyle = arrayBars[index1].style;
      const barTwoStyle = arrayBars[index2].style;

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
    // console.log("heap created");

    // animation for Sorting
    let lengthOfArrayOfObjects = arrayOfObject.length;

    for (let i = 0; i < lengthOfArrayOfObjects; i++) {
      const { a, b } = arrayOfObject[i][0];
      // console.log("swapping first index with last");
      const arrayBars = document.getElementsByClassName("array-bar");
      const barOneStyle = arrayBars[a].style;
      const barTwoStyle = arrayBars[b].style;

      barOneStyle.backgroundColor = "red";
      barTwoStyle.backgroundColor = "red";
      await sleep(50);

      const temp = barOneStyle.height;
      barOneStyle.height = barTwoStyle.height;
      barTwoStyle.height = temp;
      await sleep(50);

      barOneStyle.backgroundColor = "turquoise";
      barTwoStyle.backgroundColor = "turquoise";
      for (let j = 1; j < arrayOfObject[i].length; j++) {
        // console.log("putting the swapped value in form of max heap");
        const { index1, index2 } = arrayOfObject[i][j];
        const arrayBars = document.getElementsByClassName("array-bar");
        const barOneStyle = arrayBars[index1].style;
        const barTwoStyle = arrayBars[index2].style;

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
    setArray(sortedArray);

  }

  //display original array in the console
  function ShowArray() {
    console.log(array);
  }
  //QuickSort Visualization
  async function performQuickSort() {
    const objectArray = QuickSort(array, 0, array.length - 1);
  }

  //Heap Sort Visualization

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
        <button onClick={performBubbleSort}>Bubble Sort</button>
        <button onClick={performSelectionSort}>Selection Sort</button>
        <button onClick={performQuickSort}>Quick Sort</button>
        <button onClick={performHeapSort}>Heap Sort</button>
        <button onClick={ShowArray}> Show Original Array </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
