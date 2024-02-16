const flatArr = function (...arr) {
  if (arr.length !== 1) {
    console.error(
      "Function accepts only 1 argument, too much arguments provided",
    );
  }

  const newArr = [];

  const flatter = function (arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] === "object") {
        flatter(arr[i]);
      } else newArr.push(arr[i]);
    }
    return newArr;
  };

  return flatter(arr);
};

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

console.log(flatArr(complexArray));
