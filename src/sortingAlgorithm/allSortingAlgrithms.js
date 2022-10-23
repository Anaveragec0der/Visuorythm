function InsertionSort(Array) {
  let arr = [];

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

export default InsertionSort;
