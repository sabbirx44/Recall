const maxNum = Math.max(1, 3, 5, 7);
console.log(maxNum);

const numbs = [2, 4, 6, 8];
console.log(...numbs);

const arrayMaxNum = Math.max(...numbs);
console.log(arrayMaxNum);

// Use spread operator to copy and add
const num1 = [1, 2, 3, 4];
const num2 = [...num1, 5];
// num2.push(5);
console.log(num2);
console.log(num1);