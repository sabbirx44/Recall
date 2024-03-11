// Superclass
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Create an instance of the Animal class
let animal = new Animal('Dog', 3);

// Use the properties and methods of the Animal object
console.log(animal.name);
console.log(animal.age);
animal.speak();

// Inheritance (Prototypical)

// Subclass
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Constructor Invocation
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`); // Override
    }
}

let dog = new Dog('Fido', 2, 'Golden Retriever');
dog.speak();

// know about this

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 