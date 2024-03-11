function greet(greetHandler, b) {
    greetHandler(b);
}

function greetHandler(name) {
    console.log('Good Morning', name);
}

function greetAft(name) {
    console.log('Good Afternoon', name);
}

function greetEve(name) {
    console.log('Good Evening,', name);
}

greet(greetHandler, 'Seaum');
greet(greetHandler, 'Shadhin');
greet(greetAft, 'Efty');
greet(greetEve, 'Alamin');

document.getElementById('btn-greet').addEventListener('click', greet);