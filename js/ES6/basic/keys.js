const spiderMan = {
    name: "Peter",
    universe: "Marvel",
    suit: 'Classic Red & Blue',
    powers: ["spider-sense", "wall-crawling", "web"]
};
console.log(spiderMan);
const keys = Object.keys(spiderMan); // [ 'name', 'powers', 'universe' ]

const values = Object.values(spiderMan); // [ 'Peter', [ 'spider-sense', 'wall-crawling', 'web' ], 'Marvel' ]

const entries = Object.entries(spiderMan);
// Array of array / Two dimensional array
// [
//   [ 'name', 'Peter' ],
//   [ 'powers', [ 'spider-sense', 'wall-crawling', 'web' ] ],
//   [ 'universe', 'Marvel' ]
// ]

// delete spiderMan.universe;

// Destructuring delete and create a new object
const {powers, ...powerCut} = spiderMan

// Freeze
// Object.freeze(spiderMan);
Object.seal(spiderMan);
spiderMan.weakness = 'Radioactivity';
spiderMan.suit = 'Iron Spider';
delete spiderMan.universe;
console.log(spiderMan);