import React, { useEffect, useState } from "react";
import "./sortingVisualizer.css";
import {
  performBubbleSort,
  performHeapSort,
  performInsertionSort,
  performMergeSort,
  performQuickSort,
  performSelectionSort
} from "./performSortings"

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [isHidden, setHidden]=useState(false);
  const [pauseHidden, setPause]=useState(true);

  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  window.onresize = resetArray;

  function resetArray() {
    const arr = [];
    const arrayBar = document.getElementById("sample");
    const effectiveSize = arrayBar.getBoundingClientRect().width + 4;
    const maxBars = (window.innerWidth/2)/effectiveSize;
    for (let i = 0; i < maxBars; i++) {
      arr.push(randomInterval(20, 400));
    }
    setArray(arr);
  }

  useEffect(() => {
    resetArray();
  }, []);

  //for generating new array
  function generateNewArray() {
    resetArray();
  }

  //display original array in the console
  function ShowArray() {
    console.log(array);
  }

  async function performSort(sort){
    setHidden(true);
    setPause(false);
    await sort(array,setArray);
    setHidden(false);
    setPause(true);
  }

  return (
    <div>
      <div className="array-container">
       
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            id={index}
            style={{ height: `${value}px` }}
          >
            {" "}
          </div>
        ))}
        <br />
        <div className="array-bar" style={{visibility:'hidden',height:'0px'}} id="sample"></div>
      </div>
      {
        !isHidden&&(
          <>
        <button onClick={generateNewArray}> Generate New Array </button>
        <button onClick={()=>performSort(performInsertionSort)}>Insertion Sort</button>
        <button onClick={()=>performSort(performBubbleSort)}>Bubble Sort</button>
        <button onClick={()=>performSort(performSelectionSort)}>Selection Sort</button>
        <button onClick={()=>performSort(performQuickSort)}>Quick Sort</button>
        <button onClick={()=>performSort(performHeapSort)}>Heap Sort</button>
        <button onClick={()=>performSort(performMergeSort)}>Merge Sort</button>
        <button onClick={ShowArray}> Show Original Array </button>
          </>
        )
      }
        {!pauseHidden&&<button> Pause </button>}
    </div>
  );
}

export default SortingVisualizer;
