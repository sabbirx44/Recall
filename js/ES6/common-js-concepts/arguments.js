function sum(a, b, c) {
    // console.log(arguments); // Only inside the function | Array like object
    // console.log(arguments[3]);

    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i]);
    // }

    const args = [...arguments];
    console.log(args)

    // const total = a + b + c;

    // let total = 0;
    // for (let argument of arguments) {
    //     total += argument;
    // }
    // return total;
}

// console.log(arguments);

const result = sum(1, 3, 5, 7, 9); // Arguments
// console.log(result);
// console.log(typeof sum);
console.log(sum.length);