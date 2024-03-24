// Array destructuring

const numbers = [5, 7];
// const num1 = numbers[0];
// const num2 = numbers[1];
const [num1, num2] = numbers;
console.log(num1, num2);

function boxy(a, b) {
    const array = [a, b];
    return array;
}
const [first, second] = boxy(6, 9);
console.log(first, second);

const student = {
    name: 'Sabbir',
    age: 19,
    courses: ['Physics', 'Mathematics', 'ICT'],
};
const [crs1, crs2, crs3] = student.courses;
console.log(crs1, crs2, crs3);

// Object destructuring
const { name, age } = { id: 1, name: 'Seaum', age: 20 };
console.log(name, age);

const employee = {
    position: 'Software Engineer',
    department: 'Engineering',
    salary: 85000,
    startDate: '2023-07-15',
    isFullTime: true,
    contact: {
        email: 'employee@example.com',
        phone: '+1234567890'
    }
};
const {position, salary} = employee;
console.log(position, salary);
const {email, phone} = employee?.contact;
console.log(email, phone);