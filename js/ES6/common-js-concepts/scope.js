function add(a, b) {
    const total = a + b;
    console.log(total);
    if (b > 40) {
        const sum = a + b + 10;
        console.log(sum);
    }
    else{
       var sum = a + b + 50; // Hoisting
       console.log(sum);
    }
    // console.log(sum);
}
// console.log(total);
add(20, 30);