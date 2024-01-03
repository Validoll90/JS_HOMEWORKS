'use strict';

const askOperation=prompt('What you want: add, sub, mult, div?');
if (askOperation =='add') {
   const numb1 =Number (prompt('Write first number'));
   const numb2 = Number  (prompt('Write second number'));
    alert(numb1 + numb2);
}
else if (askOperation =='sub') {
    const numb3 = prompt('Write first number');
    const numb4 = prompt('Write second number');
    alert(numb3 - numb4);
}
else if (askOperation =='mult') {
    const numb5 = prompt('Write first number');
    const numb6 = prompt('Write second number');
    alert(numb5 * numb6);
}

else if (askOperation =='div') {
    const numb7 = prompt('Write first number');
    const numb8 = prompt('Write second number');
    alert(numb7 / numb8);
}