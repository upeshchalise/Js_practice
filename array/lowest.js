// ARRAY
// array is a data structure to store multiple values in a single variable
// Arrays are indexed, meaning that each element in the array has an index

const array = [12, 21, 3, 41, 15, 36, 17, 8, 9, 10];
console.log(array[1]); //2

// find the lowest value in an array
const lowest = Math.min(...array); //javascript built in methods
console.log("built in method", lowest);

const low = array.reduce((a, b) => (a < b ? a : b)); //reduce method
console.log("using reduce", low);

const low2 = array.sort((a, b) => a - b)[0]; //sort method
console.log("using sort", low2);

let lowestValue = array[0];
for (let i = 1; i < array.length; i++) {
  //using loop
  if (array[i] < lowestValue) {
    lowestValue = array[i];
  }
}
console.log("using loop", lowestValue);
