const insertionSort = arr => {
  if (!arr || !Array.isArray(arr) || arr.length <= 1) return;

  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
};

const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
insertionSort(a);
console.log(a);
