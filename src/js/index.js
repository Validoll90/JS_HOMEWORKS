const assortiment = {
  apple: 10,
  eggs: 15,
  potatoes: 20,
  cherry: 25,
};
const sale = (obj) => {
  const newPrice = {};
  Object.keys(obj).forEach((key) => {
    newPrice[key] = obj[key] * 0.9;
  });
  return newPrice;
};
const newPrice = sale(assortiment);
console.log(newPrice);
//
// task2
const students = [
  { name: "Vika", grade: 85 },
  { name: "Vlad", grade: 95 },
  { name: "Andriy", grade: 92 },
  { name: "Anna", grade: 65 },
  { name: "Inna", grade: 91 },
];
const bestStudents = students.filter((student) => student.grade > 90);
console.log(bestStudents);
