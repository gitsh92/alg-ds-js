const mergeSort = arr => {
  const helper = arr => {
    if (arr.length <= 1) {
      return arr;
    }

    const mp = Math.floor(arr.length / 2);

    const left = helper(arr.slice(0, mp));
    const right = helper(arr.slice(mp, arr.length));

    const merged = merge(left, right);

    return merged;
  };

  return helper(arr);
};

const merge = (arr1, arr2) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(a));
