const arr = document.getElementById("arr");
let count = 0;
const itemsText = [];

for (const li of arr.querySelectorAll("li")) {
  console.log(li.textContent.trim());
  count++;
  itemsText.push((li.textContent = "Hello"));
}

console.log(`Total elements: ${count}`);
console.log(itemsText);
.