// bubble sort is an algorithm to sort the array in ascending order

// How it works:

// Go through the array, one value at a time.
// For each value, compare the value with the next value.
// If the value is higher than the next one, swap the values so that the highest value comes last.
// Go through the array as many times as there are values in the array.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`for ${i} times`);
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(`for ${j} times`);
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 4, 1, 5, 7, 8]));

// The Bubble Sort algorithm can be improved a little bit more.

// Imagine that the array is almost sorted already, with the lowest numbers at the start, like this for example:
// In this case, the array will be sorted after the first run, but the Bubble Sort algorithm will continue to run, without swapping elements, and that is not necessary.

// If the algorithm goes through the array one time without swapping any values, the array must be finished sorted, and we can stop the algorithm, like this:

function improvedBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`for ${i} times`);

    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(`for ${j} times`);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
my_array = [7, 3, 9, 12, 11];
console.log(bubbleSort(my_array));
console.log(improvedBubbleSort(my_array));
