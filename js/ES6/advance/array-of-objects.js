const products = [
    { id: 1, name: 'MacBook', price: 200000 },
    { id: 2, name: 'HP', price: 100000 },
    { id: 3, name: 'Dell', price: 75000 },
    { id: 4, name: 'Lenovo', price: 50000 }
];

// map()
const names = products.map(p => p.name);
console.log(names);

// forEach()
products.forEach(p => console.log(p.id));

// filter()
const expensive = products.filter(p => p.price >= 100000);
console.log(expensive);

// find()
const affordable = products.find(p => p.price <= 75000);
console.log(affordable);

// reduce()
const total = products.reduce((previous, current) => previous + current.price, 0);
console.log(total);