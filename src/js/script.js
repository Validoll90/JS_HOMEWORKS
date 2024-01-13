'use strict';

let numb = prompt('Введіть число');
let degree = prompt('Введіть ступінь');
function numbDeg (numb, degree = 1) {
 if (isNaN(numb) && isNaN(degree)) return "помилка";
return (+numb) ** (+degree);
}
const result = numbDeg(numb, degree);
alert(result);