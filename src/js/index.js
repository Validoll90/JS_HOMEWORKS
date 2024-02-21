const student = {
  name: "John",
  surname: "Doe",
  age: 30,
};

const printName = function (prefix) {
  console.log(this);
  console.log(`${prefix} ${this.surname}`);
};

const myApply = function (func, context, argsArr) {
  context.printName = func;
  context.printName(argsArr, ...argsArr);
  delete context.printName;
};

const myBind = function (func, context, argsArr) {
  return function () {
    myApply(func, context, argsArr);
  };
};

const result = myBind(printName, student, ["Mr"]);
console.log(result);
result();
