let arr = [];
// let arr2 = [];
function InsertionSort(Array) {
  for (let i = 1; i < Array.length; i++) {
    let arr1 = [];
    let j = i - 1;

    let x = Array[i];
    while (j > -1 && Array[j] > x) {
      //swapping using destructuring
      [Array[j + 1], Array[j]] = [Array[j], Array[j + 1]];
      let obj = {
        a: j + 1,
        b: j
      };

      j--;
      arr1.push(obj);
    }
    arr.push(arr1);
  }
  console.log(Array);
  console.log(arr);
  return arr;
}
function SelectionSort(Array) {
  let i, j, k;
  // let obj={};
  for (i = 0; i < Array.length - 1; i++) {
    let arr1 = [];
    for (j = k = i; j < Array.length; j++) {
      if (Array[j] < Array[k]) {
        k = j;
      }
    }
    [Array[i], Array[k]] = [Array[k], Array[i]];
    let obj = {
      a: i,
      b: k
    };
    arr1.push(obj);

    arr.push(arr1);
  }
  // console.log(Array);
  // console.log(arr);
  return arr;
}


const bubbleSort = (arr)=>{
    const passes = [];
    let swapped = false;
    for(let i=0;i<arr.length;i++){
        let itr = [];
        for(let j=0;j<arr.length-i-1;j++){
            itr[j] = {
                a : j,
                b : j+1 
            };
            if(arr[j]>arr[j+1]){
                swapped=true;
                itr[j]['swap'] = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        passes.push(itr)
        if(!swapped)break;
    }
    return {steps:passes,sortedArray:arr};
}



//For Heap Sort
function HeapSort(array, len) {
  let res = [];
  for (let i = len - 1; i > 0; i--) {
    res.push(Delete(array, i));
  }
  return res;
}

function Heapify(Array, n) {
  let packageArray = [];
  for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
    let j = 2 * i + 1;
    let obj = {};
    while (j <= n - 1) {
      if (j + 1 < n && Array[j] < Array[j + 1]) {
        j = j + 1;
      }
      if (Array[i] < Array[j]) {
        obj = {
          idx1: i,
          idx2: j
        };
        packageArray.push(obj);
        [Array[i], Array[j]] = [Array[j], Array[i]];
        i = j;
        j = 2 * i + 1;
      } else {
        break;
      }
    }
  }
  packageArray.push(Array);
  // return(obj);
  // return Array;
  // console.log("Heapified Array " + Array);
  return packageArray;
}

function Delete(arr, n) {
  let val = arr[0];
  arr[0] = arr[n];
  arr[n] = val;
  let arrOfObj = [];
  let obj1 = {
    a: 0,
    b: n
  };
  arrOfObj.push(obj1);
  let i = 0;
  let j = 2 * i + 1;
  while (j < n - 1) {
    if (j <= n - 2 && arr[j + 1] > arr[j]) {
      j = j + 1;
    }
    if (arr[i] < arr[j]) {
      let obj2 = {
        index1: i,
        index2: j
      };
      arrOfObj.push(obj2);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i = j;
      j = 2 * j + 1;
    } else {
      break;
    }
  }
  // console.log(arr);
  return arrOfObj;
  // return obj;
}

export { SelectionSort,  InsertionSort, bubbleSort, Heapify, Delete, HeapSort };

