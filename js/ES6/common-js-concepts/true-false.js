/*
 Truthy:
 1. true
 2. number (except 0)
 3. string (expect '')
 4. '0', 'false'
 5. object
 6. array

 Falsy:
 1. false
 2. 0
 3. '' (empty string)
 4. undefined
 5. null
*/

let x = null;
console.log(x)
if (x) {
    console.log('Value of x is truthy.');
}
else {
    console.log('Value of x is falsy.');
}