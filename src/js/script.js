'use strict';

function calculatePricePotato(liters) {
    if (isNaN(liters) || liters === 0) return "error";
    const potatoWeight = 75;
    const potatoesForLiter = 4;
    const potatoPrice = 13;
    const amountPotato = ((liters * potatoesForLiter * potatoWeight) / 1000);
    return `You need ${amountPotato} kg to cook ${liters} liters and it will cost you ${Math.ceil(amountPotato) * potatoPrice} UAH`;
}

const liters = +prompt("How many liters of borsch do you want to cook?");
console.log(calculatePricePotato(liters));
alert(calculatePricePotato(liters));

