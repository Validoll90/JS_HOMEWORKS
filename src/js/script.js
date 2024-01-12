'use strict';

let result = '';
for (let i = 10; i < 21; i++) {
    result += ` ${i}` + ',';
}
console.log(result);

//

for (let i = 10; i < 21; i++) {
    console.log(i**2);
}

//

for (let i = 1; i<=10; i++) {
    console.log(i * 7);
}
//

let sum =1;
for (let i = 1; i < 15; i++) {
    sum += i;
}
console.log(`${sum}`);

//

let mult=1;
for (let i =  15; i <36; i++) {
    mult *= i;
}
console.log(`${mult}`);

//

let sum = 0;
let result =0;
for (let i =1; i <= 500; i++) {
    sum += i;
    result = sum / 500;
}

console.log(`${result}`);



let sum =0;
for (let i = 30; i < 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
} console.log(`${sum}`);



let result =0;
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        result += i;
    }
} console.log(result);
//



let naturalNum= +prompt('Введіть натуральне число');
let result =0;
let sum = 0;
for (let i = 1; i <= naturalNum; i++ ) {
    if (naturalNum % 1 === 0) {
        i += 1;
        console.log(naturalNum , i);
    } if (i % 2 === 0) {
        result += 1;
        sum = result + i;
    }
} console.log(sum);

//

for (let i = 1; i <=10; i++) {
    for (let x = 1; x<=10; x++) {
        console.log(`${i} * ${x} = ${i * x}`);
    }
} console.log();































