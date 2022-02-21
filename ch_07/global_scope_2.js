// better approach
let user = {
    name: 'Brainiac',
    age: 34,
}

function greet() {
    console.log(`Hello, ${user.name}`);
}

function getBirthYear() {
    return new Date().getFullYear() - user.age;
}

greet();
console.log(getBirthYear());
