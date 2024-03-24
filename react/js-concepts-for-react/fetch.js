// 1. JSON => stringify, parse
const student = {
    name: 'Sabbir',
    age: 19,
    courses: ['Physics', 'Mathematics', 'ICT'],
};
console.log(student);

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch()
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// Object keys and values as array
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

// forEach()
const numbs = [1, 2, 3, 4, 5];
numbs.forEach(num => console.log(num));
const mapNum = numbs.map(num => num * 2);
console.log(mapNum);

// for of() - array like object
// for in() - object

// Add or remove from an array -
const students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Emily", age: 18, grade: "B" },
    { name: "Michael", age: 21, grade: "A-" },
    { name: "Sarah", age: 22, grade: "B+" },
    { name: "David", age: 19, grade: "C" }
];

const newStudent = {name: 'Aron', age: 19, grade: 'A+'};

// Copy students and the add newStudent
const newStudents = [...students, newStudent];
console.log(newStudents);

// Create new students without one student
const remaining = students.filter(student => student.name !== 'David');
console.log(remaining);