/* for...of

const numbers = [1, 3, 5, 7, 9];
console.log(numbers);
for(const number of numbers){
    console.log(number);
} 

The for...of loop grabs each number from the numbers array, stores it temporarily in number, and then follows the instructions within the curly braces for each number. */

/* while

let i = 1;
let sum = 0;
while (i <= 10) {
    console.log(i);
    if (i % 2 === 1) {
        console.log("It's odd");
    }
    else {
        console.log("It's even");
    }
    sum += i;
    i++;
}
console.log('sum:', sum); */

/* for(loop var decl; loop cnd; loop var cng)

let sum = 0;
for (let i = 10; i >= 1; i--) {
    console.log(i);
    if (i % 2 === 1) {
        console.log("It's odd");
    }
    else {
        console.log("It's even");
    }
    sum += i;
}
console.log('sum:', sum); */

/* Sum of 1 to 20 that are divisible by 3

let sum = 0
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        sum += i;
    }
}
console.log("sum:", sum); */

/* if(){break;}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop when i reaches 5
  }
  console.log(i); // Prints 0, 1, 2, 3, 4
} */

/* if(){continue;}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skips even numbers
    }
    console.log(i); // Prints 1, 3, 5, 7, 9
}  */

/* do...while

let i = 0;
do {
    console.log(i);
    i++;
}
while (i < 9) {
    console.log(i);
} */