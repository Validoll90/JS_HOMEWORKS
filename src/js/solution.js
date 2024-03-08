const ul = document.getElementById("ulId");
const itemsText = [];
let count = 0;
for (const li of ul.querySelectorAll("li")) {
  console.log(li.textContent.trim());
  count++;
  itemsText.push((li.textContent = "Hello"));
}

console.log(`Total elements: ${count}`);
console.log(itemsText);
