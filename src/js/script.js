'use strict';

const numOrStr = prompt('input number or string');

switch (true) {
    case numOrStr === null:
        alert('Ви скасували');
        break;
    case numOrStr === '':
        alert('Порожній рядок');
        break;
    case isNaN(+numOrStr):
        alert(' number is Ba_NaN');
        break;
    default:
        alert('OK!');
}