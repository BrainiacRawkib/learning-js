class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person('Jamie'),
    juliet = new Person('Juliet'),
    peter = new Person('peter'),
    jay = new Person('Jay');
const arr = [jamie, juliet, peter, jay];

console.log(arr.find(p => p.id === juliet.id));
console.log(arr.find(p => p.id === this.id, juliet));