// function declaration

// function add(a, b) {
//     const result = a + b;
//     return result;
// }
// const sum = add(5, 90);

function add(a, b) {
    return a + b;
}

// function expression

const add2 = function (a, b) {
    return a + b; // explicit
}

// arrow function

const add3 = (a, b) => a + b // implicit

const sum = add(5, 90);
console.log(sum);

// Single parameter
const getAge = (person) => person.age;
const student = {name: 'Shadhin', age: 20};
const age = getAge(student);
console.log(age);

const getThirdElement = numbers => numbers[2];
const third = getThirdElement([2, 4, 6, 8]);
console.log(third);

// No parameter
const getPI = () => Math.PI;
console.log(getPI());

// Large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}