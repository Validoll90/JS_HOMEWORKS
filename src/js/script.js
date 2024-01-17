'use strict';

function padString (str, length, symbol='*', right = true) {
if (typeof str !=='string') throw new Error('str should be a string');
if (typeof length !=='number' || isNaN(length)) throw new Error('length should be a valid number and not NaN');

if(str.length === length) return str;
if(str.length > length) return str.substring(0, length);

if(typeof symbol !== 'string' || symbol.length !== 1) throw new Error("symbol is not the type of string or its length is not 1");
if(typeof right !== 'boolean') throw new Error("right is not the type of boolean");

const symbols = symbol.repeat(length - str.length);
return right ? str + extension : extension + str;
}

console.log(padString('Hello', 8,));
console.log(padString('Hello', 6,'*', false));
console.log(padString('Hello', 2));

}
