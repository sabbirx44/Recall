/* Type

const i = 'abc';
const j = 'abc';
const k = `abc`;
const l = new String('abc'); // String object.
console.log(l);
console.log(typeof l);
console.log(k.length);
console.log(k[0]);
j[2] = 'd'
console.log(j) // Array elements is mutable(changeable) but string elements is immutable. */

/* Case

let str = 'Hello world';

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1 = 'UPPER CASE';
let str2 = 'lower case';
let str3 = 'Mixed Case';

console.log(str1 === str1.toUpperCase());  // Output: true (all uppercase)
console.log(str2 === str2.toLowerCase());  // Output: true (all lowercase)
console.log(str3 === str3.toUpperCase());  // Output: false (mixed case)
console.log(str3 === str3.toLowerCase());  // Output: false (mixed case)

const str4 = 'Hi there';
const str5 = 'hi there';

if (str4.toLowerCase() === str5.toLowerCase()) {
    console.log('Same same');
}
else {
    console.log('But different');
} */

/* Trim

const str6 = ' water';
const str7 = 'water ';

if (str6.trim() === str7.trim()) {
    console.log('Panir opor nam gibon');
}
else {
    console.log('Sagore pani ase but khaite pari na');
} */

/**
 * slice(): Extracts substring from start (inclusive) to end (exclusive).
 * Counts backwards too: Negative indexes let you grab from the end.
 * New string, original untouched. 
*/

/* 1. Extract first 5 characters:
const originalString = 'Hello, world!';
const firstFive = originalString.slice(0, 5);  // 'Hello'

// 2. Extract 'world':
const worldSubstring = originalString.slice(7, 12);  // 'world'

// 3. Extract from 5th character to end:
const restOfString = originalString.slice(5);  // ', world!'

// 4. Extract first 5 characters again (using negative index):
const firstFiveAgain = originalString.slice(0, -7);  // 'Hello,'

// 5. Extract last 6 characters:
const lastSix = originalString.slice(-6);  // 'world!'

// 6. Demonstrate usage:
console.log(firstFive);
console.log(worldSubstring);
console.log(restOfString);
console.log(firstFiveAgain);
console.log(lastSix); */

/** 
 * split(): Splits string into array by separator.
 * Takes optional separator (separator, limit). 
 * Leaves original string untouched.
*/

/* 1. Split string into individual characters:
const characters = 'hello'.split('');

// 2. Split sentence into words by spaces:
const sentence = 'This is a sentence with multiple words.';
const wordsBySpaces = sentence.split(' ');

// 3. Split sentence into words by 'i':
const wordsByI = sentence.split('i');

// 4. Split comma-separated list into items:
const itemsList = 'apple,banana,orange';
const items = itemsList.split(',');

// 5. Limit splits to the first two words:
const wordsToSplit = 'one two three four';
const firstTwoWords = wordsToSplit.split(' ', 2);

// 6. Demonstrate usage:
console.log(characters);
console.log(wordsBySpaces);
console.log(wordsByI);
console.log(items);
console.log(firstTwoWords); */

/* join

const friends = ['Seaum', 'Shadhin', 'Efty', 'Alamin'];

console.log(friends.join());
console.log(friends.join('|'));
console.log(friends.join('-')); */

/* concat

// Concatenating with + operator and template literals:
const hi = 'Hello';
const n = 'Seaum';
const msg = hi + ', ' + n + '!';
//const msg = `${hi}, ${n}!`;
console.log(msg);

// Concatenation with concat():
const wel = 'Welcome to';
const jsWorld = 'the world of JavaScript';
const fullMsg = wel.concat(' ', jsWorld);
console.log(fullMsg);

// includes
console.log(fullMsg.includes('r')); */

// Reverse

const sent = 'I am learning web dev.';

let reverse = '';
for (const letter of sent) {
    //console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

let rev = '';
for(let i = 0; i < sent.length; i++) {
    //console.log(i);
    //console.log(sent[i]);
    const letter = sent[i];
    rev = letter + rev;
}
console.log(rev);

// SC
console.log(sent.split('').reverse().join(''))