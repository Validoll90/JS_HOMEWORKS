let userAge = +prompt("Введіть ваш вік", "70");

while (isNaN(userAge) || userAge === 0 || userAge <= 0) {
  userAge = +prompt("Введіть коректне число", "70");
}

const lastNum = userAge % 10;
let message;

if (userAge >= 11 && userAge <= 19) {
  message = `${userAge} років`;
} else {
  switch (lastNum) {
    case 1:
      message = `${userAge} рік`;
      break;
    case 2:
    case 3:
    case 4:
      message = `${userAge} роки`;
      break;
    default:
      message = `${userAge} років`;
  }
}

alert(message);
