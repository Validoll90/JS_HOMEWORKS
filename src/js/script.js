'use strict';

const arr = [1, 2, 3, 4, 5];
let sum = 0;
let square = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    square += arr[i]**2;
} console.log(sum, square);
