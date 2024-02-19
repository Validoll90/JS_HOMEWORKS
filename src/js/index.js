const namesArr = ["Vika", "Vova", "Andriy", "Pavlo"];
const result = namesArr.filter((name) => name.length >= 5);
console.log(result);
//
//task 2
const numbersArr = [1, 2, 3, 4, 5, 6];
const result = numbersArr
  .filter((num) => num % 2 === 0)
  .reduce((acc, curValue) => acc + curValue, 0);
console.log(result);
//
//task3
const numbArray = [1, 2, 3, 4, 5];
const result =
  numbArray.reduce((acc, curVal) => acc + curVal, 0) / numbArray.length;
console.log(result);
