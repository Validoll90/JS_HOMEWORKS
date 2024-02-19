const a = (num1, num2) => num1 + num2;
console.log(a(1, 2));
//
//
const b = (str) => str.length;
console.log(b("Vika"));
//
//
const newArr = (numbers) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 1);
  }
  return result;
};
const numbers = [1, 2, 3];
const bigArr = newArr(numbers);
console.log(bigArr);
