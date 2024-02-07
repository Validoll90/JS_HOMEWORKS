const addOne = (x) => x + 1;
const square = (x) => x * x;
const callbacks = [addOne, square, addOne];
const runCallbacks = function (callbackArr, value) {
  return callbackArr.reduce((acc, callbacks) => callbacks(acc), value);
};
const result = runCallbacks(callbacks, 1);
console.log(result);

// // // // // //
const double = (x) => x * 2;
const square = (x) => x * x;
const negate = (x) => -x;
const composeFunctions = function (...functions) {
  return function (value) {
    let result = value;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

const composedFunction = composeFunctions(double, square, negate);
console.log(composedFunction(2));
