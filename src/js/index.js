// Reduce

const arr = [1, 2, 3, 4, 5];
const callback = (acc, currentValue) => acc + currentValue;
const reduceFunc = (callback, arr = []) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum = callback(sum, arr[i]);
  }
  return sum;
};
console.log(reduceFunc(callback, arr));

//
