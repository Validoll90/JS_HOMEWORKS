'use strict';

//
const x = 10;
const y = 7;
let result = x > y ? 'x більше за y' : 'x не більше, ніж y';
console.log(result);

//
const num = prompt(' Введіть ціле число');
let numLeng = num.length;
const plusNum= 'позитивне';
const minusNum= 'негативне';
const meaning = 'однозначне';
const meaning2 = 'двоцифрове';
const meaning3 = 'трицифрове';
if (num > 0 && numLeng===1) {
    console.log(num + plusNum + meaning + numLeng);
} else if (num > 0 && numLeng===2) {
    console.log(num + plusNum + meaning2 + numLeng);
} else if (num > 0 && numLeng===3) {
    console.log(num + plusNum + meaning3 + numLeng);
} else {
    console.log(num + minusNum);
}

//

const numFirst =prompt(' Введіть перше число' );
const numSecond = prompt(' Введіть друге число');
const numThird = prompt(' Введіть третє число');
if (numFirst > numSecond && numFirst > numThird) {
    console.log('Найбільше число: ' + numFirst);
} else if (numSecond > numFirst && numSecond > numThird) {
    console.log('Найбільше число: ' + numSecond);
} else {
    console.log('Найбільше число: ' + numThird);
}

//
const a= prompt(' Введіть довжину першої сторони трикутника');
const b= prompt(' Введіть довжину другої сторони трикутника');
const c= prompt(' Введіть довжину третьої сторони трикутника');
if ( a + b > c && a + c > b && b + c > a) {
    console.log('трикутник може існувати при таких довжинах');
} else {
    console.log('трикутник не  може існувати при таких довжинах');
}




























