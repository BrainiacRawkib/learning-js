const obj = {};
obj.color = "yellow";

console.log(obj);

obj['not an identifier'] = 3;

console.log(obj['not an identifier'], obj['color']);

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];

console.log(obj);
