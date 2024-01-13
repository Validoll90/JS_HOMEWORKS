'use strict';

const numb = prompt('Введіть число');
const degree = prompt('Введіть ступінь');
function numbDeg (numb, degree = 1) {
 if (isNaN(numb) && isNaN(degree)) return "помилка";
return (+numb) ** (+degree);
}
const result = numbDeg(numb, degree);
alert(result);