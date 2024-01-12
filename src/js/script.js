'use strict';

const num = +prompt('Введіть число');
let minDiv=0;
for (let i =2; i < num; i++) {
    if (num % i === 0) {
        minDiv = i;
    } else {
        num < 1;
        console.log(NaN);
    }
}
console.log(`${minDiv}`);