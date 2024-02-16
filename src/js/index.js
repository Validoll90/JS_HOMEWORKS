const arrNumb = [1, 2, 3, 4];

// indexOf
const indexOf = function (arr, searchEl) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchEl) {
      return i;
    }
  }
  return -1;
};
console.log(indexOf(arrNumb, 3));

// lastIndexOff
const lastIndexOf = function (arr, searchEl) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === searchEl) {
      return i;
    }
  }
  return -1;
};
console.log(lastIndexOf(arrNumb, 3));

// find
const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) return arr[i];
  }
  return undefined;
};
console.log(find(arrNumb, (item) => item > 2));
//
// findIndex
const findIndex = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};
console.log(findIndex(arrNumb, (item) => item > 2));
//
// includes
const includes = function (arr, searchEl) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchEl) return true;
  }
  return false;
};
console.log(includes(arrNumb, 3));
//
// every
const every = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
};
console.log(every(arrNumb, (item) => item > 0));
//
// some
const some = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
};
console.log(some(arrNumb, (item) => item % 2 === 0));
