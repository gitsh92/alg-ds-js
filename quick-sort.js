const swap = (arr, ix, iy) => {
  const temp = arr[ix];
  arr[ix] = arr[iy];
  arr[iy] = temp;
};

const quickSort = arr => {
  const helper = (arr, start, end) => {
    if (start >= end) {
      return;
    }

    const pivot = arr[start]; // improve this
    let count = 0;
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot) {
        count++;
        swap(arr, start + count, i);
      }
    }
    swap(arr, start, start + count);

    helper(arr, start, start + count - 1);
    helper(arr, start + count + 1, end);
  };

  helper(arr, 0, arr.length - 1);
};

const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
quickSort(a);
console.log(a);
