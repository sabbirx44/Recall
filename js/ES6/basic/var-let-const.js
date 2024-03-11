/**
 * var = No reason to use var;
 * let = Allow it to reassign;
 * const = do not allow you to reassign;
*/

const money = 5000;
// money = 10000;
const rich = money + 10000;
console.log(rich);

let count = 0;
count = 0 + 10;
console.log(count);

// Array
const numbers = [2, 3, 6, 8];
// numbers = [1, 3, 5, 7];
numbers[1] = 4;
numbers.push(10, 12, 14);
console.log(numbers);

// Object
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
//person = {name: 'Bliss'};
person.name = 'Bliss'
console.log(person);

// Loop
let sum = 0;
for (let i = 0; i < 10; i++) {
    const num = i;
    sum = sum + num;
}
console.log(sum);