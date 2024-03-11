// 8 ways to get 'undefined'

// 1. Variable that is not initialized will give undefined
let first;
// console.log(first);

// 2. Function with no return
function second(a, b) {
    const total = a + b;
}
const result = second(2, 4);
console.log(result);

// 3. Parameter that is not passed will be undefined
function any(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
any(11, 22);

// 4. If return has nothing on the right side will return undefined
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    };
    return a + b;
};
const total = noNegative(2, -5);
// console.log(total);

// 5. Property that doesn't exist on an object will give you undefined
const student = {id: 1, name: 'Efty'};
// console.log(student.id, student.age);

// 6. Array elements outside the index range
const sixth = [1, 2, 3, 4, 5, 6];
delete sixth[1];
// console.log(sixth[1], sixth[6]);
// console.log(sixth);

// 7. Deleting an element inside an array

// 8. Set a value directly to undefined
let eighth;
// console.log(typeof eighth);

const insteadUse = null;
// console.log(typeof null);