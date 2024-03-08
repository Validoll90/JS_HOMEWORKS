const parseJSON = (newStr) => {
  try {
    return JSON.parse(newStr);
  } catch (error) {
    return "Invalid JSON string";
  }
};

console.log(parseJSON('{"name": "John", "age": 30}'));
console.log(parseJSON('{"name": "John", "age":'));
