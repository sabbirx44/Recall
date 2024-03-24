// 1. Var declaration by let & const
const name = 'Sabbir';
let age = 19;
age = 20;

/* 2. Condition -
        single: <, >, ===, !==, <=, >=
        multiple: &&, ||
*/
if (age < 18) {
    console.log(`${name} is underage.`);
} else if (age >= 18 && age <= 25) {
    console.log(`${name} is a young adult.`);
} else {
    console.log(`${name} is an adult.`);
}

// 3. Array - index, length, push, pull
const numbers = [1, 2, 6, 4, 5];
numbers[2] = 3;
console.log(numbers);

// 4. Loop - for
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. Function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(5, 10);
console.log(output);

// 6. Object
const student = {
    name: 'Sabbir',
    age: 19,
    isEnrolled: true,
    courses: ['Physics', 'Mathematics', 'ICT'],
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};

// 3 ways to access property by name:
console.log(student.age);
console.log(student['age']); 

const variable = 'age';
console.log(student[variable]);