import React, { useEffect, useState } from "react";
// import { Button } from "antd";
// import { PauseCircleOutlined,StopOutlined,ArrowRightOutlined,UndoOutlined,PlayCircleOutlined} from '@ant-design/icons';
// import "antd/dist/antd.min.css";
import 'semantic-ui-css/semantic.min.css'
import { Button,Icon,Grid, GridColumn,Segment } from 'semantic-ui-react'
import { Slider } from "react-semantic-ui-range";
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
  const[value,setValue]=useState(100);
  const[speed,setSpeed]=useState(50);
  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  window.onresize = resetArray;

  function resetArray() {
    
    const arr = [];
    const arrayBar = document.getElementById("sample");
    const effectiveSize = arrayBar.getBoundingClientRect().width + 4;
    const maxBars = ((window.innerWidth/2)/effectiveSize)*value/100;
    
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
  const settings={
    start:100,
    min:10,
    max:100,
    step:10,
    onChange:(value)=>{
      setValue(value);
      generateNewArray();
    }
   }
  const speedSettings={
    start:50,
    min:10,
    max:100,
    step:10,
    onChange:(speed)=>{
      setSpeed(speed);
    }
   }
  return (
     <div>
     <div id="sliders">
     <div>
        <Grid padded>
    <Grid.Column width={2}>
      
        <p>
          <Slider
            value={value}
            color="red"
            inverted={false}
            settings={settings}
          />
        </p>
      
    </Grid.Column>
    </Grid>
    </div>

     <div data-value= {speed} id="speedControl" >
        <Grid padded>
    <Grid.Column width={2}>
      
        <p>
          <Slider
            value={speed}
            color="red"
            inverted={false}
            settings={speedSettings}
          />
        </p>
      
    </Grid.Column>
    </Grid>
    </div>
</div>
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
        <Button primary style={{display:generateNewArrayHidden?"none":""}} onClick={generateNewArray}> Generate New Array </Button>
        <Button basic color={!resumeText?"teal":"green"} style={{display:insertionSort?"none":""}} onClick={()=>performSort(performInsertionSort,"Insertion Sort")}>{!resumeText?"Insertion Sort":"Resume"}</Button>
        <Button basic color={!resumeText?"teal":"green"} style={{display:bubbleSort?"none":""}} onClick={()=>performSort(performBubbleSort,"Bubble Sort")}>{!resumeText?"BubbleSort":"Resume"}</Button>
        <Button basic color={!resumeText?"teal":"green"} style={{display:selectionSort?"none":""}} onClick={()=>performSort(performSelectionSort,"Selection Sort")}>{!resumeText?"SelectionSort":"Resume"}</Button>
        <Button basic color={!resumeText?"teal":"green"} style={{display:quickSort?"none":""}} onClick={()=>performSort(performQuickSort,"Quick Sort")}>{!resumeText?"Quick Sort":"Resume"}</Button>
        <Button basic color={!resumeText?"teal":"green"} style={{display:heapSort?"none":""}} onClick={()=>performSort(performHeapSort,"Heap Sort")}>{!resumeText?"Heap Sort":"Resume"}</Button>
        <Button basic color={!resumeText?"teal":"green"} style={{display:mergeSort?"none":""}} onClick={()=>performSort(performMergeSort,"Merge Sort")}>{!resumeText?"Merge Sort":"Resume"}</Button>
         <Button onClick={ShowArray}> Show Original Array </Button> 
        {generateNewArrayHidden&&(<Button secondary onClick={handleStop}> Reset </Button>)}
          </>
        )
      }
        <Button id="pauseButton" inverted color="yellow" disabled={pauseDisabled} style={{display:!isHidden?"none":""}}  > Pause </Button>
        <Button style={{display:!isHidden?"none":""}} inverted color="red" onClick={handleStop}>Stop</Button>
    </div>
  );
} 

export default SortingVisualizer;
