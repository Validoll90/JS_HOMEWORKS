'use strict';

const age = +prompt('Введіть ваш вік');
const town= prompt('З якого ви міста');
const sport=prompt('Ваш улюблений вид спорту');


if (age==false) {
    alert('Шкода, що Ви не захотіли ввести свій вік');
}

if (town === 'Київ') {
    alert('Ви живете в столиці України!');
} else if (town === 'Лондон')  {
    alert('Ви живете в столиці Англії!');
} else if (town === 'Вашингтон') {
    alert('Ви живете в столиці Америки!');
}  else {
    alert(`Ти живеш у місті ${town}`);
}

const football='David Backham';
const tennis='Serena Williams';
const box='Antony Joshua';
switch (sport) {
    case 'Футбол':
        alert(`Круто! Хочеш стати ${football}`);
        break;
    case 'Теніс':
        alert(`Круто! Хочеш стати ${tennis}`);
        break;
    case 'Бокс':
        alert(`Круто! Хочеш стати ${box}`);
        break;
    default:
        alert('Шкода, що Ви не захотіли ввести свій вид спорту');
}