// Primitive | Pass by value

let num1 = 5;
let num2 = 10;

function multiply(a, b) {
    a = 15;
    const result = a * b;
    return result;
}

console.log(num1);
const output = multiply(num1, num2);
console.log(output);
console.log(num1);

// Non-primitive | Pass by reference

let actors1 = {hero: 'Ananta', heroine: 'Barsha'};
let actors2 = {hero: 'Raj', heroine: 'Pori'};

function makeMovie(couple1, couple2) {
    couple1.hero = 'Any1';
    couple2.heroine = 'Any2';
}

console.log(actors1, actors2);
makeMovie(actors1, actors2);
console.log(actors1, actors2);