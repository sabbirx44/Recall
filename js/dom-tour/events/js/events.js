/* Option 1: Directly set on the HTML element
<button onclick="console.log(7)">Click me</button> */

// Option 2:
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// Option 3:

// 3.1
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// 3.2
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}

// Option 4:

// 4.1
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// 4.2
const yellowButton = document.getElementById('make-yellow');
yellowButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
})

// 4.3
document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})