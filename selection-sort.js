const swap = (arr, ix, iy) => {
  const temp = arr[ix];
  arr[ix] = arr[iy];
  arr[iy] = temp;
};

const selectionSort = arr => {
  if (!arr || !Array.isArray(arr) || arr.length <= 1) return;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
};

const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
selectionSort(a);
console.log(a);
