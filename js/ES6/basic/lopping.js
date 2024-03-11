// "Use 'for...of' with arrays or strings, and 'for...in' with objects."
const numbers = [1, 2, 3, 4];
// for(let i = 0; i < numbers.length; i++) {}
// while

for (const num of numbers) {
    // console.log(num);
}

const nawab = 'Siraj-ud-Daulah'
for (const char of nawab) {
    // console.log(char);
}

const animal = {
    name: "Lion",
    sound: "Roar",
    legs: 4
};

// for (const key of animal) {
//     console.log(key);
// };

const keys = Object.keys(animal);
console.log(keys);

for (const key of keys) {
    const value = animal[key]; // . for property and [] for var
    // console.log(key, value);
}

// for (const key in animal) {
//     const value = animal[key];
//     console.log(key, value);
// };