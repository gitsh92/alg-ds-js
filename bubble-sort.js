const swap = (arr, ix, iy) => {
  const temp = arr[ix];
  arr[ix] = arr[iy];
  arr[iy] = temp;
};

const swap2 = (arr, ix, iy) => {
  [arr[ix], arr[iy]] = [arr[iy], arr[ix]];
};

// sorts in place
const bubbleSort = arr => {
  if (!arr || !Array.isArray(arr) || arr.length <= 1) return;

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      return;
    }
  }
};

const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(a);
console.log(a);
