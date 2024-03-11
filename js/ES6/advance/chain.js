// Data access
const data = [{ id: 12321158, name: 'Shadhin', address: 'Bakerganj' }];
console.log(data[0].address);

const products = {
    count: 500,
    data: [
        { id: 1, name: 'MacBook', price: 200000 },
        { id: 2, name: 'HP', price: 100000 }
    ]
};

// Second product's price
console.log(products.data[1].price);

const user = {
    id: 987654321,
    username: 'john_doe',
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    address: {
        street: {
            number: 123,
            name: 'Main Street',
            apartment: 'Apt 456'
        },
        city: 'AnyTown',
        state: 'California',
        country: 'USA'
    }
};

console.log(user.address.street.apartment);

// Optional Chain
const user2 = {
    id: 987654321,
    username: 'alice_smith',
    fullName: 'Alice Smith',
    address: {
        city: 'Springfield',
        state: 'Illinois',
        country: 'USA'
    }
};

console.log(user.address.street?.apartment);
console.log(user2.address.street?.apartment);