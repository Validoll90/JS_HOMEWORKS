'use strict';

const a=prompt(' Введіть число');
const b=prompt(' Введіть число');
const num=+prompt(' Введіть число');
let result;

alert(a===0 ? 'Вірно' : 'Неправильно');
alert(a>0 ? 'Вірно' : 'Неправильно');
alert(a<0 ? 'Вірно' : 'Неправильно');
alert(a>=0 ? 'Вірно' : 'Неправильно');
alert(a<=0 ? 'Вірно' : 'Неправильно');
alert(a===0 ? 'Вірно' : 'Неправильно');
alert(a==='test' ? 'Вірно' : 'Неправильно');
alert(a==='1' ? 'Вірно' : 'Неправильно');
alert(a>0 && a<5 ? 'Вірно' : 'Неправильно');
const task1 = (a===0 || a===2) ? a+7 : a/10;
alert(task1);
const task2 = (a<=1 || b>=3) ? a+b : a-b;
alert(task2);
const task3 = (a>2 && a<11) || (b>=6 && b<=14) ? 'Вірно' : 'Неправильно';
alert(task3);

switch (num) {
    case 1:
        alert(result='зима');
        break;
    case 2:
        alert(result='весна');
        break;
    case 3:
        alert(result='літо');
        break;
    case 4:
        alert(result='осінь');
        break;
    default:
        alert(result='невідомий сезон');
}


