const date = new Date();
const before = {d: new Date()};

// console.log(before.d instanceof date);  // true
//
const json = JSON.stringify(before);
const after = JSON.parse(json);
// console.log(after.d instanceof date);  // false
console.log(typeof after.d)  // string

after.d = new Date(after.d);
// console.log(after.d instanceof date);  // true