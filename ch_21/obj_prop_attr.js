const obj = {foo: 'bar'};
console.log(
    Object.getOwnPropertyDescriptor(obj, 'foo'));

Object.defineProperty(obj,'foo', {writable: false});

console.log(
    Object.getOwnPropertyDescriptor(obj, 'foo'));

obj.foo = 3  // TypeError: Cannot assign to read only property 'foo' of [object Object]

// Attempting to set a read-only property will only result in an error
// in strict mode. In nonstrict mode, the assignment will not be successful,
// but there will be no error

// adding new property to an object using Object.defineProperty
Object.defineProperty(obj, 'color', {
    get: function () {return this.color;},
    set: function (value) {this.color = value;},
});

// create a data property with Object.defineProperty
Object.defineProperty(obj, 'name', {
    value: 'Cynthia',
});
Object.defineProperty(obj, 'greet', {
    value: function () {return `Hello, my name is ${this.name}!`;}
});

console.log(obj);
console.log(Object.isFrozen(obj));