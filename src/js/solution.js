const name = "Valya";

const ul = document.getElementById("ulId");

const ulAttributes = ul.attributes;

console.log(ulAttributes);

const attrValue = [];
const attrName = [];

for (const ulAttr of ulAttributes) {
  attrValue.push(ulAttr.value);
  attrName.push(ulAttr);
}

console.log("Ul attributes values: ");
console.log(attrValue);
console.log("Ul attributes names: ");
console.log(attrName);

ul.lastElementChild.textContent = `Привет меня зовут ${name}`;

ul.firstElementChild.setAttribute("data-my-name", name);

ul.removeAttribute("data-dog-tail");
