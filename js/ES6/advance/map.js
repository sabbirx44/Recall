const numbers = [1, 2, 3, 4, 5];

// const double1 = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// };

// console.log(double1);

// The map() method iterates over each element of an array, applying the operation specified in the callback function to each element. It collects the results of each operation in a new array and returns this array as the final output.

// function double2(num) {
//     console.log('num now', num);
//     return num * 2;
// };

// const output1 = numbers.map(doubled2);
// console.log(output1);

// const double3 = n => n * 2;
// const output2 = numbers.map(double3);

// console.log(output2);

const output3 = numbers.map(n => n * 2);

// console.log(output3); 