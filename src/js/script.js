'use strict';

function newArr(array){

    const positiveArr = [];
    if(array.length === 0) return "Array is empty";

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 0) positiveArr.push(array[i]);
    }

    return positiveArr.length !== 0 ? positiveArr : null;
}
const arr = [1, 2, 3, -1, -2, -3];

console.log(newArr(arr));