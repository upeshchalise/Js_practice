// The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

// How it works

// Go through the array to find the lowest value.
// Move the lowest value to the front of the unsorted part of the array.
// Go through the array again as many times as there are values in the array.

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowest_index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest_index]) {
        lowest_index = j;
      }
    }
    if (lowest_index !== i) {
      let temp = array[i];
      array[i] = array[lowest_index];
      array[lowest_index] = temp;
    }
  }
  return array;
};

console.log(selectionSort([2, 5, 1, 6, 7, 3]));
