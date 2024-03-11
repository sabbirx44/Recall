print5();
print10();

for (var i = 0; i < 5; i++) {
    console.log(i);
};
console.log('Outside', i);

function print5() {
    console.log(5);
}

// const 
var print10 = function() {
    console.log(10);
}