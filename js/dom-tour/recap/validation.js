const number = '23';
if (typeof number === 'number') {
    console.log('Value is a number');
}
else {
    console.log('Value is not a number');
}

const numbers = [1, 2, 3, 4];
// console.log(typeof numbers);
console.log(Array.isArray(numbers));