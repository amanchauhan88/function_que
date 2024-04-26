

const testArrays = [1, 2, 3, 4, 5, 6]

function getEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
let newArr = getEvenNumbers(testArrays);

    console.log("Original Array:", testArrays);
    console.log("Even Numbers:"+"["+newArr+"]");
