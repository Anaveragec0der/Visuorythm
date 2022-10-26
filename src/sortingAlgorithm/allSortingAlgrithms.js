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

// function QuickSort(Array, low, high) {
//   let resultarray = [];
//   resultarray.push(quickSort(Array, low, high));
//   return resultarray;
// }

// function quickSort(Array, low, high) {
//   if (low < high) {
//     // let len = partition(Array, low, high).length;
//     let partitionReturn = partition(Array, low, high);
//     // console.log(partitionReturn);
//     arr.push(partitionReturn);
//     // let pi = partitionReturn.idx1;
//     let pi = partition(Array, low, high).idx1;
//     quickSort(Array, low, pi - 1);
//     quickSort(Array, pi + 1, high);
//     // console.log(Array);
//     // console.log(arr);
//     return arr;
//   }
// }
// function partition(arr, start, end) {
//   let pivot = arr[end];
//   // let packageArray = [];
//   // let pivotPositionPass = {};
//   let pivotPlacingPass = {};
//   let i = start - 1;
//   for (let j = start; j < end; j++) {
//     if (arr[j] <= pivot) {
//       i++;
//       // console.log(i + " " + j);
//       // pivotPositionPass = {
//       //   index1: i,
//       //   index2: j
//       // };
//       // console.log(pivotPositionPass.index1);
//       // console.log(pivotPositionPass.index2);
//       // packageArray.push(pivotPositionPass);
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   pivotPlacingPass = {
//     idx1: i + 1,
//     idx2: end
//   };
//   // console.log(pivotPlacingPass.idx1);
//   // console.log(pivotPlacingPass.idx2);
//   // packageArray.push(pivotPlacingPass);

//   // console.log(i + 1);
//   // console.log(end);
//   [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
//   // return i + 1;
//   // return packageArray;
//   return pivotPlacingPass;
// }

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

export { SelectionSort, Heapify, Delete, HeapSort };
export default InsertionSort;
