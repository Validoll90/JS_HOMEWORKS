'use strict';

for (let i = 20; i <=30; i+=0.5) {
    console.log(i);
}

//

const money = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i}$ === ${i * money}`);
}

//

const N=100;
let result;
for (let i =1; i <=100; i++) {
    result = i ** 2;
    if (result <=N) {
        console.log(result);
    }
}

//
const N = +prompt('Введіть число');
for (let i = 1; i <= 100; i++){
    if (N>1 && i % 2 ===0) {
        console.log(N,true);
    }
}
//

const numb = prompt('Введіть число');
while (numb % 3 === 0) {
    console.log(numb);
    numb++;
}

