// The filter() method in JavaScript selects elements from an array based on a specified condition provided by a callback function. It then returns a new array containing only the elements that satisfy the condition.

const numbers = [66, 65, 64, 59, 58, 57];
// const selected = numbers.filter(n => n > 60);
// const selected = numbers.filter(n => n > 70);
const selected = numbers.filter(n => n % 2 === 1);
console.log(selected);