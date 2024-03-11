// Object destructing

const actor = {
    name: 'Ananta',
    age: 45,
    money: 5000000
}
// const money = actor.money;  
const {money, age: years} = actor // If right side is an object, left side of destructing will be object as well. Use property name as a variable that contains the property value.
console.log(money);
console.log(years);

// Array destructing

const numbs = [1, 2];
const [first, second] = numbs;
console.log(first);

const [x, y] = [3, 4];
console.log(y);

function doubleThem(a, b){
    return [a*2, b*2];
}
const [initial, next] = doubleThem(5, 6);
console.log(initial);