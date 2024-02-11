// Object literal | Non-primitive

const subject = {
    name: 'Math',
    teacher: 'Bithy',
    exam: {
        date: 20,
        'imp chap': [2, 4, 6, 8],
        place: 'B2',
        hallNo: [201, 202, 203]
    }
};

/* Obj props and values

const keys = Object.keys(subject);
console.log(keys);

const values = Object.values(subject);
console.log(values); */

/* Access

console.log(subject.exam.date); // Dot notation
console.log(subject.exam['imp chap']); // Bracket notation
console.log(subject.exam.hallNo[1]); */

/* Set and update 

subject.exam['date'] = 25;
subject.exam.hallNo[1] = 204;

let impChap = 'imp chap';
subject.exam[impChap] = [1, 3, 5, 7];

delete subject.exam

console.log(subject); */

/* Loop

//Obj - for...in
for(const prop in subject) {
    console.log(prop);
    console.log(subject[prop]);
}

const keys = Object.keys(subject)
for (const key of keys) {
    console.log(key, ':', subject[key]);
} */

//Object declaration

const pencil = new Object();
console.log(pencil);

const rubber = Object.create({});
console.log(rubber);
