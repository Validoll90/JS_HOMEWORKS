const user = {
  name: "Vika",
  surname: "Doe",
  age: 25,
};
const printName = (prefix) => {
  console.log(`${prefix} ${this.name}`);
};
const myApply = (func, ctx, args) => {
  ctx.printName = func;
  ctx.printName(args, ...args);
  delete ctx.printName;
};

myApply(printName, user, ["Ms."]);
