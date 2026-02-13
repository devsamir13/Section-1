const user = {
    name:'Samir',
    age: 19,
    city: 'Balia'
}

console.log(user);
console.log(user.name);
console.log(user['name']);

user.email = 'samir@gmail.com'
user.age = 20;

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
delete user.address;
console.log(user);

const smartphone = {
    brand: 'Samsung',
    price: 120000,
    color: ['black', 'white', 'blue']
};

console.log(smartphone.color[2]);
