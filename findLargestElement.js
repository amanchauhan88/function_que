
const ary1 = [1, 2, 3, 4, 5];

function findLargestElement(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let largest =findLargestElement(ary1);



  console.log(`Largest element in [${ary1}] :  ${largest}  `);

