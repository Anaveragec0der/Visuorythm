let arr = [];
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
  console.log(Array);
  console.log(arr);
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

export { SelectionSort, bubbleSort };
export default InsertionSort;
