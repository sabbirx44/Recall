/* if (condition) {}
else {Execute code if the condition is false} */

/* 1.

if (3 < 5) {
    console.log("I have a smaller value.")
}
var biriyaniPrice = 500;
if (biriyaniPrice < 300) {
    console.log("Mama1 give me some biriyani.")
}
else {
    console.log("Mama2 give me ruti & kola.")
}

2.

const salary = 70000;
const haveBigHouse = false;
const isBCS = true;
if ((salary > 50000 && haveBigHouse == true) || isBCS == true) {
    console.log("Esho baba kobul");
}
else {
    console.log("Vago tumi Mokbul");
} */

/* Multi-level

1.

const price = 4000;
if (price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price > 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}

2.

const price = 800;
const age = 18;
if (age <= 12) {
    console.log("You can eat for free")
}
else if (age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount
    console.log(payAmount)
}
else{
    console.log(price)
} */

/* Nested

const money = -20;
if (money > 500) {
    console.log("Takay tor chinimini kore!");
}
else {
    if (money > 100) {
        console.log("Tui gorib kintu chotolok na!");
    }
    else {
        if (money > 0) {
            console.log("Ei chotoloker baccha!");
        }
        else {
            console.log("Tui UGV te poro!");
        }
    }
} */

/* Ternary - condition ? apply when true : apply when false

const age = 12;

if (age >= 18) {
    console.log("Vote dio mama");
}
else {
    console.log("Muri khao");
}

age >= 18 ? console.log("Vote dio mama") : console.log("Muri khao") */

/* Logical not operator

let price = 500;
const isLeader = true; // false - !isLeader
if (isLeader) {
    price = 0;
}
else {
    price += 100;
}
console.log(price) */