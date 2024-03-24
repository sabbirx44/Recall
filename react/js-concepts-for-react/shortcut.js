// Ternary
const money = 100;
let food;
if (money > 100) {
    food = 'Biryani';
}
else {
    food = 'Khichuri';
}
console.log(food);

let drink = money > 20 ? 'Coke' : 'Jug water';
console.log(drink);

let isActive = true;
const showUser = () => console.log('Show user');
const hideUser = () => console.log('Hide user');

isActive ? showUser() : hideUser();
isActive && showUser(); // If left side is true, right side will be executed.
!isActive || showUser(); // If left side is false, right side will be executed.

// Toggle boolean
isActive = !isActive;

// Number to string
const num1 = 50;
const numStr = num1 + ''; // num1.toString();
console.log(numStr);

// String to number
const input = '500';
const inputNum = +input; // parseInt(input);
console.log(inputNum);