'use strict';

const age = +prompt('Введіть ваш вік');
const town= prompt('З якого ви міста');
const sport=prompt('Ваш улюблений вид спорту');
const football='David Backham';
const tennis='Serena Williams';
const box='Antony Joshua';


if (age==false ) {
    alert('Шкода, що Ви не захотіли ввести свій вік');
}

if (town === 'Київ'.toLowerCase()) {
    alert('Ви живете в столиці України!');
} else if (town === 'Лондон'.toLowerCase())  {
    alert('Ви живете в столиці Англії!');
} else if (town === 'Вашингтон'.toLowerCase()) {
    alert('Ви живете в столиці Америки!');
}  else {
    alert(`Ти живеш у місті ${town}`);
}
if (sport === 'Футбол'.toLowerCase()) {
    alert(`Круто! Хочеш стати ${football}`);
} else if (sport === 'Теніс'.toLowerCase()) {
    alert(`Круто! Хочеш стати ${tennis}`);
} else if (sport === 'Бокс'.toLowerCase()) {
    alert(`Круто! Хочеш стати ${box}`);
} else {
    alert('Шкода, що Ви не захотіли ввести свій вид спорту');
}
