import React, { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button,Icon, Input, Label,Transition } from 'semantic-ui-react'
import Slider from '@mui/material/Slider';
import "./sortingVisualizer.css";
import {
  performBubbleSort,
  performHeapSort,
  performInsertionSort,
  performMergeSort,
  performQuickSort,
  performSelectionSort
} from "./performSortings"

let arrayOfNumbers=[];
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
  const[input,setInput]=useState("");
  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  window.onresize = resetArray;

  function resetArray(event,force) {
   if(input.length===0||force){
    const arr = [];
    const arrayBar = document.getElementById("sample");
    const effectiveSize = arrayBar.getBoundingClientRect().width + 4;
    const maxBars = ((window.innerWidth/2)/effectiveSize)*value/100;
    
    for (let i = 0; i < maxBars; i++) {
      arr.push(randomInterval(20, 400));
    }
    setArray(arr);
  }
  else{
    // console.log(arrayOfNumbers);
    const arr=[...arrayOfNumbers];
    setArray(arr);
  }
}

  useEffect(() => {
    setInput("");
    arrayOfNumbers=[];
    resetArray();
  }, []);

  useEffect(() => {
  }, [array]);
   
  //for generating new array
  function generateNewArray() {
    setIState(0);
    setJState(0);
    resetArray();
  }

  function forceGenerateNewArray(){
    setInput("");
    setIState(0);
    setJState(0);
    resetArray("","force");
  }

  //display original array in the console
  function ShowArray() {
    console.log(array);
  }

 
 
  const handleStop = ()=>{
      setResumeText(false);
      setNewArray(false);
      setInsertionSort(false);
      setHeapSort(false);
      setQuickSort(false);
      setMergeSort(false);
      setSelectionSort(false);
      setHidden(false);
      forceGenerateNewArray();
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
      await sort(array,setArray,iState,jState,setIState,setJState,setBubbleSort,handleStop);
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
      await sort(array,setArray,iState,jState,setIState,setJState,setSelectionSort,handleStop);
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
      await sort(array,setArray,iState,jState,setIState,setJState,setInsertionSort,handleStop);
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
      await sort(array,setArray,iState,jState,setIState,setJState,setQuickSort,handleStop);
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
      await sort(array,setArray,iState,jState,setIState,setJState,setMergeSort,handleStop);
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
      await sort(array,setArray,iState,jState,setIState,setJState,setHeapSort,handleStop);
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

   function handleInput(){
    setInput(event.target.value);
    // console.log(array);
   }
   function handleSubmit(){
    arrayOfNumbers=[];
    let arrayOfStrings=input.split(",");
    // console.log(arrayOfStrings);
    arrayOfStrings.forEach(element => {
      arrayOfNumbers.push(Number(element));
    });
    resetArray();
   }
  return (
     <div>
     <div id="inputContainer">
     <Label as='a' color='violet' pointing="right">
     Enter the valuess in array
        </Label>
     <Input type={"text"}
     fluid 
     focus
     style={{width:"50%", margin:"10px"}}
     value={input} name="arrayInput" onChange={handleInput} autoComplete="off"/>
     <Button color="violet" size="small" onClick={handleSubmit}> Lets Go! </Button>
     </div>
     <div id="sliders">
     <div id="sizeSlider">
      <div className="iconContainer">
      <Icon name="minus"/>
      </div>    
    <Slider color="secondary" size="small" value={value} min={10} max={100} step={10} valueLabelDisplay="auto" onChange={(event,value)=>{setValue(value);generateNewArray();}}/>
    <div className="iconContainer">
    <Icon name="plus"/>
    </div>
    </div>
    
     <div data-value= {speed} id="speedControl" >
     <div className="iconContainer">
    <Icon name="backward"/>
    </div>
    <Slider color="secondary" size="small" value={speed} min={10} max={100} step={10} valueLabelDisplay="auto" onChange={(event,value)=>{setSpeed(value)}}/>
    <div className="iconContainer">
    <Icon name="forward"/>
    </div>
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
          <Transition
            animation="bounce" 
            duration={500} 
            >
              <Button primary style={{display:generateNewArrayHidden?"none":""}} onClick={forceGenerateNewArray}>
          Generate New Array</Button>
            </Transition>
        
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
        <Button id="stopButton" style={{display:!isHidden?"none":""}} inverted color="red" >Stop</Button>
    </div>
  );
} 

export default SortingVisualizer;
