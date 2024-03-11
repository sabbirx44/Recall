const user = {id: 1, name: 'Efty', job: 'Hacker'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Seam',
    address: {
        street: '123 Main Street',
        city: 'AnyTown',
        country: 'USA'
    },
    products: ['mobile', 'laptop', 'monitor'],
    revenue: 1000000,
    isOpen: true,
    isNew: false
};
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

console.log(typeof shop);
console.log(typeof shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);