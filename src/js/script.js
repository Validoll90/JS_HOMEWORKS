'use strict';
// 1.**Створення та Модифікація Об'єктів:**

const student = {
    name: 'John',
    age: 24,
    grade: 100
}
student.grade = 95;
student.profession = 'developer';
console.log(student);

// 2. **Робота з Вкладеними Об'єктами:**

const book = {
    title: 'Life',
    author: 'John Doe',
    year: 2023

}
book.publisher = {
    name: 'Alice',
    location: 'Kyiv'
}

console.log(book);

// 3. **Перебір Властивостей Об'єкта:**

const movie = {
    title: 'Life',
    director: 'John Doe',
    year: 2023,
    genre: 'Comedy'
}
for(let key in movie) {
    console.log(key+":"+movie[key]);
}

// or second variant for 'for in'

for (let key in movie) {
    // alert(key);
    // alert(movie[key]);
    console.log(key);
    console.log(movie[key]);
}

// 4. **Співставлення Об'єктів:**

const person1 = {
    name: "John",
    age: 25
}
const person2 = {
    name: "John",
    age: 25
}
console.log(person1===person2);


// 5. **Робота з Масивом Об'єктів:**

const animals = ['Type', 'name'];
animals[2]='Age';

console.log(animals);


