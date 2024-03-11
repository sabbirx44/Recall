// Strongly typed language

// int age = 25;
// char name[] = "John Doe";
// bool isTrue = true;
// int numbers[5] = {10, 20, 30, 40, 50};
/*
struct Student {
    char name[50];
    int age;
};

struct Student student1;

strcpy(student1.name, "Alice");
student1.age = 22;
*/

// Dynamically typed language

// Primitive
const a = 5;
const b = 'Samsu akhon r kopay na';
const c = true;

// Non-primitive
const d = [11, 22, 33, 44];
const e = {id: 1, class: 1};

// console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

// Reassign value
let f = 9;
let g = f;
console.log(f, g);
g = 6;
console.log(f, g);

let p = {job: 'Web Developer'};
let q = p;
console.log(p, q);
// q = {job: 'Software Developer'};
q.job = 'Software Developer';
console.log(p, q);