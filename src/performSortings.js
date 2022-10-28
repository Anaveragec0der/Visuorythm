import  {
    InsertionSort,
    bubbleSort,
    Heapify,
    HeapSort,
    SelectionSort,
    mergeSort,
    quickSort
  } from "./sortingAlgorithm/allSortingAlgrithms";
  
  //helper function to perform animation
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };  
  
  //Insertion Sort Visualization
  async function performInsertionSort(array,setArray,iState,jState,setIState,setJState){
    
    let temp1=false;
    document.getElementById("pauseButton").addEventListener("click",()=>
    {temp1=!temp1;});
    const objectArray = InsertionSort(array.slice());
    // console.log(objectArray);
    let j = jState
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
  }

  //Selection Sort Visualization
  async function performSelectionSort(array, setArray) {
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

//Bubble sort Visualization
async function performBubbleSort(array,setArray,iState,jState,setIState,setJState){
  let temp1=false;
  document.getElementById("pauseButton").addEventListener("click",()=>
  {temp1=!temp1;});
  console.time("start")
  const {steps,sortedArray} = bubbleSort(array.slice());
  console.timeEnd("start");
  console.log(steps);
 
  let j=jState;
  for ( let i=iState; i < steps.length; i++) {
    for (  ; j < steps[i].length; j++) {
      // console.log(objectArray[i][j]);
      console.log(i,j);
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
  // setArray(sortedArray);
}


  //Heap Sort Visualization
  async function performHeapSort(array, setArray) {
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
      await sleep(25);

      const temp = barOneStyle.height;
      barOneStyle.height = barTwoStyle.height;
      barTwoStyle.height = temp;
      await sleep(25);

      barOneStyle.backgroundColor = "turquoise";
      barTwoStyle.backgroundColor = "turquoise";
    }
    console.log("heap created");

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
      await sleep(25);

      const temp = barOneStyle.height;
      barOneStyle.height = barTwoStyle.height;
      barTwoStyle.height = temp;
      await sleep(25);

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

//Merge Sort Visualization

  async function performMergeSort(array, setArray) {
    let {steps,sortedArray} = mergeSort(array.slice());
    for(let i=0;i<steps.length;i++){
      for(let j=0;j<steps[i].length;j++){
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
      }
    }
    setArray(sortedArray);
  }

  //QuickSort Visualization
  async function performQuickSort(array, setArray) {
    let {steps,sortedArray} = quickSort(array.slice());
    for(let i =0;i<steps.length;i++){
      for(let j=0;j<steps[i].length;j++){
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
      }
    }
    setArray(sortedArray);
  }

  export {performInsertionSort, performBubbleSort, performSelectionSort, performHeapSort, performMergeSort, performQuickSort}