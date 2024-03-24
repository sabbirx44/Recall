// Array of objects
const students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Emily", age: 19, grade: "B" },
    { name: "Michael", age: 21, grade: "A-" },
    { name: "Sarah", age: 22, grade: "B+" },
    { name: "David", age: 18, grade: "C" }
];

// map()
students.map(student => console.log(student.name));

const names = students.map(student => student.name)
console.log(names);

/* forEach()
students.forEach(student => console.log(student.age)); // multiline {}

// 3. filter()
const twenty = students.filter(student => student.age >= 20);
console.log(twenty);

const specificName = students.filter(student => ['A', 'A-', 'B'].includes(student.grade));
console.log(specificName);

// find()
const special = students.find(student => ['A', 'A-', 'B'].includes(student.grade));
console.log(special); */