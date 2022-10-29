import  {
    InsertionSort,
    bubbleSort,
    Heapify,
    HeapSort,
    SelectionSort,
    mergeSort,
    quickSort
  } from "./sortingAlgorithm/allSortingAlgrithms";
  

  let steps=[];
  //helper function to perform animation
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };  
  
  //Insertion Sort Visualization
  async function performInsertionSort(array,setArray,iState,jState,setIState,setJState){
    
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    const objectArray = InsertionSort(array.slice());
    let j = jState;
    for (let i = iState; i < objectArray.length; i++) {
      for (; j < objectArray[i].length; j++) {
   
        // console.log(objectArray[i][j]);
        const { a,b } = objectArray[i][j];
        // console.log(idx1 + " " + idx2 + " " + swap);
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
        if(temp1){
          setJState(j+1);
          break;
        }
      }
      if(temp1){
        setIState(i);
        break;
      }
      j=0;
    }
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
  }

  //Selection Sort Visualization
  async function performSelectionSort(array,setArray,iState,jState,setIState,setJState) {
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    let j = jState
    const objectArray = SelectionSort(array.slice());
    for (let i = iState; i < objectArray.length; i++) {
      for (; j < objectArray[i].length; j++) {
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
        if(temp1){
          setJState(j+1);
          break;
        }
      }
      if(temp1){
        setIState(i);
        break;
      }
      j=0;
    }
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
  }

//Bubble sort Visualization
async function performBubbleSort(array,setArray,iState,jState,setIState,setJState){
  let temp1=false;
  const setTemp1 = ()=>{
    temp1  = !temp1;
  }
  document.getElementById("pauseButton").addEventListener("click",setTemp1);
  const {steps,sortedArray} = bubbleSort(array.slice());

  let j=jState;
  for ( let i=iState; i < steps.length; i++) {
    for (  ; j < steps[i].length; j++) {
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
      if(temp1){
        // console.log(temp1);
        setJState(j+1);
        break;
      }
      
    }
    if(temp1){
      setIState(i);
      break;
    }
    j=0;
  }
  document.getElementById("pauseButton").removeEventListener("click",setTemp1);
  // setArray(sortedArray);
}


  //Heap Sort Visualization
  async function performHeapSort(array,setArray,iState,jState,setIState,setJState) {
    let breakAll = false;
    let len = array.length;
    let heapifiedArrayAndSwappedIndexes = Heapify(array.slice(), len);
    let length = heapifiedArrayAndSwappedIndexes.length;
    const heapifiedArray = heapifiedArrayAndSwappedIndexes[length - 1];
    let onlyswappedIndexes = heapifiedArrayAndSwappedIndexes.slice(
      0,
      length - 1
    );
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    const arrayOfObject = HeapSort(heapifiedArray, heapifiedArray.length);
    console.log(arrayOfObject);
    // animation for creation of heap
    let lengthOfSwappedIndexesArray = onlyswappedIndexes.length;
    let i = jState==-1?iState:lengthOfSwappedIndexesArray;
    for (; i < lengthOfSwappedIndexesArray; i++) {
      const { idx1: index1, idx2: index2 } = onlyswappedIndexes[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      const barOneStyle = arrayBars[index1].style;
      const barTwoStyle = arrayBars[index2].style;

      barOneStyle.backgroundColor = "red";
      barTwoStyle.backgroundColor = "red";
      await sleep(25);

      const temp = barOneStyle.height;
      barOneStyle.height = barTwoStyle.height;
      barTwoStyle.height = temp;
      await sleep(25);

      barOneStyle.backgroundColor = "turquoise";
      barTwoStyle.backgroundColor = "turquoise";
      if(temp1){
        setIState(i+1);
        setJState(-1);
        breakAll = true;
        break;
      }
    }
    if(breakAll)return;

    // animation for Sorting
    let lengthOfArrayOfObjects = arrayOfObject.length;
    i = jState==-1?0:iState;
    let j = jState==-1?0:jState;
    for (; i < lengthOfArrayOfObjects; i++) {
      const { a, b } = arrayOfObject[i][0];
      // console.log("swapping first index with last");
      const arrayBars = document.getElementsByClassName("array-bar");
      const barOneStyle = arrayBars[a].style;
      const barTwoStyle = arrayBars[b].style;

      barOneStyle.backgroundColor = "red";
      barTwoStyle.backgroundColor = "red";
      await sleep(25);

      const temp = barOneStyle.height;
      barOneStyle.height = barTwoStyle.height;
      barTwoStyle.height = temp;
      await sleep(25);

      barOneStyle.backgroundColor = "turquoise";
      barTwoStyle.backgroundColor = "turquoise";
      for (; j < arrayOfObject[i].length; j++) {
        // console.log("putting the swapped value in form of max heap");
        const { index1, index2 } = arrayOfObject[i][j];
        console.log(i,j);
        console.log(index1,index2)
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
        if(temp1){
          setJState(j+1);
          break;
        }
      }
      if(temp1){
        setIState(i);
        break;
      }
      j = 0;
    }
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
    // setArray(sortedArray);
  }

//Merge Sort Visualization

  async function performMergeSort(array,setArray,iState,jState,setIState,setJState) {
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    let {steps,sortedArray} = mergeSort(array.slice());
    let j = jState;
    for(let i=iState;i<steps.length;i++){
      for(;j<steps[i].length;j++){
          let a = document.getElementById(steps[i][j].a);
          let c = document.getElementById(steps[i][j].copy.pos);
          let b = document.getElementById(steps[i][j].b);
          a.classList.toggle('active');
          b?.classList.toggle('active');
          c.classList.toggle('copiedposition');
          await sleep(30);
          c.style.height = `${steps[i][j].copy.val}px`;
          await sleep(30);
          a.classList.toggle('active');
          b?.classList.toggle('active');
          c.classList.toggle('copiedposition');
          if(temp1){
            setJState(j+1);
            break;
          }
      }
      if(temp1){
        setIState(i);
        break;
      }
      j = 0;
    }
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
    // setArray(sortedArray);
  }

  //QuickSort Visualization
  async function performQuickSort(array,setArray,iState,jState,setIState,setJState) {
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    if(steps.length===0){
      steps = quickSort(array.slice()).steps;
    }
    let j = jState;
    console.log(steps);
    for(let i = iState;i<steps.length;i++){
      for(;j<steps[i].length;j++){
        if(j===0){
          const highIndex = document.getElementById(steps[i][j].b);
          const pivot = document.getElementById(steps[i][j].a);
          pivot.classList.toggle('copiedposition');
          await sleep(30);
          highIndex.classList.toggle('active');
          await sleep(30);
          const tmp = highIndex.style.height;
          highIndex.style.height = pivot.style.height;
          pivot.style.height = tmp;
          pivot.classList.toggle('copiedposition');
          pivot.classList.toggle('active')
          highIndex.classList.toggle('active');
          highIndex.classList.toggle('copiedposition');
          await sleep(30);
          pivot.classList.toggle('active');
          await sleep(30);
          continue;
        }
        if(j===steps[i].length-1){
          const a = document.getElementById(steps[i][j].a);
          const b = document.getElementById(steps[i][j].b);
          a.classList.toggle('active');
          await sleep(30);
          const tmp = b.style.height;
          b.style.height = a.style.height;
          a.style.height = tmp;
          await sleep(30);
          a.classList.toggle('active');
          b.classList.toggle('copiedposition');
          a.classList.toggle('copiedposition');
          await sleep(30);
          a.classList.toggle('copiedposition');
          continue;
        }
        let a,b;
        a = document.getElementById(steps[i][j].a);
        b = document.getElementById(steps[i][j].b);
        a.classList.toggle('active');
        b.classList.toggle('active');
        if(steps[i][j].swap){
          await sleep(30);
          const tmp = a.style.height;
          a.style.height = b.style.height;
          b.style.height = tmp;
        }
        await sleep(30);
        a.classList.toggle('active');
        b.classList.toggle('active');
        if(temp1){
          setJState(j+1);
          break;
        }
      }
      if(temp1){
        setIState(i);
        break;
      }
      j = 0;
    }
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
    // setArray(sortedArray);
  }

  export {performInsertionSort, performBubbleSort, performSelectionSort, performHeapSort, performMergeSort, performQuickSort}