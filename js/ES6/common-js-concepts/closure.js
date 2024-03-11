function kitchen() {
    let roast = 0;
    return function() {
        roast++
        return roast;
    }
}
const firstServer = kitchen()
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

// function stopWatch() {
//     let counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }
// watch1() (own var and instance)
// watch2()