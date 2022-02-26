let x = 1000;

console.log(x.toPrecision(5));
console.log(x.toPrecision(4));
console.log(x.toPrecision(3));
console.log(x.toPrecision(2));
console.log(x.toPrecision(1));

let i = 15.335;
console.log(i.toPrecision(6)); // "15.3350"
console.log(i.toPrecision(5)); // "15.335"
console.log(i.toPrecision(4)); // "15.34"
console.log(i.toPrecision(3)); // "15.3"
console.log(i.toPrecision(2)); // "15"
console.log(i.toPrecision(1)); // "2e+1"