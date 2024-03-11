// Multi-line strings

// const poem = 'Homework is not done \n' +
// 'Seaum plays uno with girls, having fun!'

const poem = `Homework is not done
Seaum plays uno with girls, having fun!`
console.log(poem);

// String interpolation \ Dynamic strings

const a = 10;
const b = 20;
// const sum = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
const sum1 = `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum1);

const numbs = [1, 3, 5, 7];
const person = {name: 'Seaum', age: 5};
const sum2 = `The sum of ${numbs[2]} and ${person.age} is ${numbs[2] + person.age}`;
console.log(sum2);