// always use ===
// equal comparison doesn't work for non primitive

const first = []; // '1' & true | '0' & false | {}
const second = first;
if(first === second){
    console.log('Values are equal.');
}
else{
    console.log('Values are not equal.');
}

// type coercion | conversion | casting && compare two arrays & objects (search)