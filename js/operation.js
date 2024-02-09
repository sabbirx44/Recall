var onionPrice = 20;
var eggPrice = 10;

// Add(+)

console.log(onionPrice + eggPrice) // Same for subtract(-), multiply(*), divide(/).

// Divide

console.log(10 / 3);

// Remainder and Modulo (for BigInt): Returns the positive remainder of division.

console.log(10 % 3);
console.log(-20n % 4n);

// Story

var price = 30;
price = 40;
console.log(price);
var price = price + 10;
var newPrice = price + 50;
console.log(newPrice);
var discountPrice = newPrice - 10;
console.log(discountPrice);

// Shorthand

var money = 10;
// Money = money + 20;
money+=20; // Same for subtract, multiply, divide.
console.log(money);

//Mixed operation

var first = "Mobarok";
var second = "Tobarok";
var fullName = first + second;
console.log(fullName)

console.log(40 + "20");
console.log(40 - "20");
console.log(40 * "20");
console.log(40 / "20");