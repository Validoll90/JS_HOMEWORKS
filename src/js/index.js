const arrNumb = [];
const randomNumb = function () {
  const resultNumb = Math.floor(Math.random() * 100);
  if (arrNumb.includes(resultNumb)) return randomNumb();
  arrNumb.push(resultNumb);
  return resultNumb;
};

for (let i = 0; i <= 99; i += 1) {
  console.log(randomNumb());
}
