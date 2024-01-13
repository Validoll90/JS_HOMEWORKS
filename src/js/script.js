'use strict';

let sum =0;
outerLoop:
for (let i = 1; i <=20; i++) {
    if (i % 2 !== 0) {
        sum += i;
    } else {
        i % 2 === 0;
        alert(`${sum}`);
        break outerLoop;
    }
} console.log(`${sum}`);