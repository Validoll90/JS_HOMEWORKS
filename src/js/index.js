// task1
const factorial = function (n) {
  if (n < 0) {
    console.error("stop");
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(3));
//
// task2/
const pow = function (num, degree) {
  if (degree === 1) {
    return num;
  }
  return num * pow(num, degree - 1);
};
console.log(pow(2, 4));
//
// task3
const sum = (a, b) => {
  if (b === 0) {
    return a;
  }
  return a + sum(a, b - 1);
};
console.log(sum(3, 6));
