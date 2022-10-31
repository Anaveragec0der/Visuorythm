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
  const [pauseDisabled, setPauseDisabled] = useState(false);
  const [bubbleSort,setBubbleSort]=useState(false);
  const[selectionSort,setSelectionSort]=useState(false);
  const[insertionSort,setInsertionSort]=useState(false);
  const[quickSort,setQuickSort]=useState(false);
  const[mergeSort,setMergeSort]=useState(false);
  const[heapSort,setHeapSort]=useState(false);
  const[generateNewArrayHidden,setNewArray]=useState(false);
  const[resumeText,setResumeText]=useState(false);
  const[iState,setIState]=useState(0);
  const[jState,setJState]=useState(0);
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
    setIState(0);
    setJState(0);
  }

  //display original array in the console
  function ShowArray() {
    console.log(array);
  }

 
 
  const handleStop = ()=>{
    window.location.reload();
 }
  async function performSort(sort,nameOfAlgo){
    if(nameOfAlgo==='Heap Sort')setPauseDisabled(true);
    setHidden(true);
    if(nameOfAlgo==="Bubble Sort"){
      setResumeText(true);
      setNewArray(true);
      setInsertionSort(true);
      setHeapSort(true);
      setQuickSort(true);
      setMergeSort(true);
      setSelectionSort(true);
      await sort(array,setArray,iState,jState,setIState,setJState);
      setHidden(false);
      
    }
    else if(nameOfAlgo==="Selection Sort"){
      setResumeText(true);
      setNewArray(true);
      setInsertionSort(true);
      setHeapSort(true);
      setQuickSort(true);
      setMergeSort(true);
      setBubbleSort(true);
      await sort(array,setArray,iState,jState,setIState,setJState);
      setHidden(false);
    }
    else if(nameOfAlgo==="Insertion Sort"){
      setResumeText(true);
      setNewArray(true);
      setHeapSort(true);
      setQuickSort(true);
      setMergeSort(true);
      setBubbleSort(true);
      setSelectionSort(true);
      await sort(array,setArray,iState,jState,setIState,setJState);
      setHidden(false);
    }
    else if(nameOfAlgo==="Quick Sort"){
      setResumeText(true);
      setNewArray(true);
      setInsertionSort(true);
      setBubbleSort(true);
      setSelectionSort(true);
      setHeapSort(true);
      setMergeSort(true);
      await sort(array,setArray,iState,jState,setIState,setJState);
      setHidden(false);
    }
    else if(nameOfAlgo==="Merge Sort"){
      setResumeText(true);
      setNewArray(true);
      setBubbleSort(true);
      setSelectionSort(true);
      setHeapSort(true);
      setQuickSort(true);
      setInsertionSort(true);
      await sort(array,setArray,iState,jState,setIState,setJState);
      setHidden(false);
    }
    else if(nameOfAlgo==="Heap Sort"){
      setResumeText(true);
      setNewArray(true);
      setBubbleSort(true);
      setSelectionSort(true);
      setMergeSort(true);
      setInsertionSort(true);
      setQuickSort(true);
      await sort(array,setArray,iState,jState,setIState,setJState);
      setHidden(false);
    }
    // setHidden(false);
    setPauseDisabled(false);
    // const A=[];
    // for(let i=0;i<array.length;i++){
    //   A.push(document.getElementById(i).getBoundingClientRect().height);
    // }
    // setArray(A);
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
        <button hidden={generateNewArrayHidden} onClick={generateNewArray}> Generate New Array </button>
        <button hidden={insertionSort} onClick={()=>performSort(performInsertionSort,"Insertion Sort")}>{!resumeText?"Insertion Sort":"Resume"}</button>
        <button hidden={bubbleSort} onClick={()=>performSort(performBubbleSort,"Bubble Sort")}>{!resumeText?"BubbleSort":"Resume"}</button>
        <button hidden={selectionSort} onClick={()=>performSort(performSelectionSort,"Selection Sort")}>{!resumeText?"SelectionSort":"Resume"}</button>
        <button hidden={quickSort} onClick={()=>performSort(performQuickSort,"Quick Sort")}>{!resumeText?"Quick Sort":"Resume"}</button>
        <button hidden={heapSort} onClick={()=>performSort(performHeapSort,"Heap Sort")}>{!resumeText?"Heap Sort":"Resume"}</button>
        <button hidden={mergeSort} onClick={()=>performSort(performMergeSort,"Merge Sort")}>{!resumeText?"Merge Sort":"Resume"}</button>
        <button onClick={ShowArray}> Show Original Array </button>
        {generateNewArrayHidden&&(<button onClick={handleStop}> Reset </button>)}
          </>
        )
      }
        <button id="pauseButton" disabled={pauseDisabled} hidden={!isHidden} > Pause </button>
        <button  hidden={!isHidden} onClick={handleStop}>Stop</button>
    </div>
  );
}

export default SortingVisualizer;
