// Reduce

const people = [
  { name: "Vika", age: 20, money: 200 },
  { name: "Vlad", age: 25, money: 300 },
  { name: "Olga", age: 30, money: 500 },
];
let amount = 0;
for (let i = 0; i < people.length; i++) {
  amount += people[i].money;
}
console.log(amount);
// or

const middleAge = people.reduce(
  (acc, currentValue) => acc + currentValue.age,
  0,
);
console.log(middleAge / people.length);

//
