/* An array is an ordered collection of elements accessed by a numerical index.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers)
console.log(numbers.length);
console.log(numbers[5]); 

// Set and update element's value by index - 

let num1 = numbers[0];
console.log(num1);

numbers[0] = 25;
console.log(numbers)

// Push & Pop

numbers.push(45, 65, 85);
console.log(numbers);

const out1 = numbers.pop();
console.log(numbers);
const out2 = numbers.pop();
console.log(numbers);
console.log(out1, out2);

// Unshift & Shift

numbers.unshift(5, 15);
console.log(numbers)

numbers.shift()
console.log(numbers) */

/* includes()

const friends = ['Seaum', 'Shadhin', 'Efty', 'Alamin']; // Case sensitive.
console.log(friends.includes('Seaum'));
if (friends.includes('Seaum')) {
    console.log('Party!');
}
else {
    console.log('Mourn');
} */

/* indexOf()

console.log(friends.indexOf('Alamin'));
console.log(friends.indexOf('Siam')); */

/* isArray()

const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const item = [];
const item1 = 0;
console.log(Array.isArray(index));
console.log(Array.isArray(item));
console.log(Array.isArray(item1)); */

// join(), concat(), slice(), splice()

/**
 * Looping technique -
 * 1. for
 * 2. for...of
 * 3. for...in -> object
 * 4. while
 * 5. do...while
*/

const frnds = ['Seaum', 'Shadhin', 'Efty', 'Alamin'];

for (const frnd of frnds) {
    //console.log(frnd);
}

for (let i = 0; i < frnds.length; i++) {
    //console.log(i);
    //console.log(frnds[i]);
}

let i = 0;
while (i < frnds.length) {
    //console.log(frnds[i]);
    i++
}

// Reverse

//console.log(frnds.reverse());

const revFrnds = [];
for (const frnd of frnds) {
    //console.log(frnd);
    revFrnds.unshift(frnd);
}
//console.log(revFrnds);

const revMates = [];
for (let i = 0; i < frnds.length; i++) {
    //console.log(frnds[i]);
    revMates.unshift(frnds[i]);

}
console.log(revMates);

// Decremental
const revPal = [];
for (let i = frnds.length - 1; i >= 0; i--) {
    //console.log(frnds[i]);
    revPal.push(frnds[i]);

}
console.log(revPal);

// Sort

const fruits = ['cherry', 'banana', 'dates', 'apple'];
console.log(fruits.sort());

const n = [3, 1, 9, 7, 5, 13, 11];
//console.log(n.sort());

const nAsc = [...n].sort(function (a, b) { return a - b });
const nDsc = [...n].sort(function (a, b) { return b - a });

console.log(nAsc);
console.log(nDsc);