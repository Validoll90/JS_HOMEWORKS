function greet() {
  console.log(`Hello, my name is ${this.name}! I'm ${this.age} years old`);
}
function createUser(name, age) {
  const user = {
    name,
    age,
  };
  user.greet = greet;
  return user;
}

const user1 = createUser("Valya", 33);
const user2 = createUser("Vova", 26);

user1.greet();
user2.greet();
