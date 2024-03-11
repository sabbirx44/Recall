const pet = {
    type: 'Dog',
    3: 'age',
    breed: 'Golden Retriever',
    'nick-name': 'Fido'
};

console.log(pet.type);
console.log(pet['type']);
console.log(pet[3]);

const breed = 'breed';
console.log(pet[breed]);

console.log(pet["nick-name"]);