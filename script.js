function insertionSort(arr) {
  // Start from the first element (index 1) since the single element at index 0 is trivially sorted
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // The element to be inserted into the sorted part
    let j = i - 1; // The index of the last element in the sorted part

    // Shift elements of the sorted part that are greater than the current element to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into its correct position
    arr[j + 1] = current;
  }
  return arr;
}

// Example usage:
let array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort([...array]); // Use a copy of the array to keep the original unchanged
console.log("Sorted array:", sortedArray);
