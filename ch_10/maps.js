const user1 = {name: 'Jack'};
const user2 = {name: 'Bob'};
const user3 = {name: 'Foo'};

const userRoles = new Map();

userRoles.set(user1, 'User');
userRoles.set(user2, 'User');
userRoles.set(user3, 'Admin');

// set() method is also chainable
userRoles.set(user1, 'User').set(user2, 'User').set(user3, 'Admin');

// passing an array of arrays to the constructor.
const userRoles1 = new Map([
    [user1, 'User'],
    [user2, 'User'],
    [user3, 'Admin'],
]);

console.log(userRoles);
console.log(userRoles.get(user3));
// console.log(userRoles.has(user4)); // Error
console.log(userRoles.size);
console.log(userRoles1.entries());
console.log(userRoles1.keys());
console.log(userRoles1.values());

for (let u of userRoles1.keys()) {
    console.log(u.name);
}

for (let r of userRoles1.values()) {
    console.log(r);
}

for (let ur of userRoles1.entries()) {
    console.log(`entry --> ${ur[0].name}, Role --> ${ur[1]}`);
}

// note that we can use destructuring to make this iteration
// even more natural.
for (let [u, r] of userRoles1.entries()) {
    console.log(`${u.name}: ${r}`);
}

arr = [...userRoles.values(), ...userRoles.keys()]
console.log(arr);

// to delete a single entry from a map, use the delete() method
userRoles1.delete(user2);
console.log(userRoles1.size);
userRoles1.clear();
console.log(userRoles1.size);