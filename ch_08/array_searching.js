const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(arr.indexOf(5)); // returns 1
console.log(arr.lastIndexOf(5)); // returns 5
console.log(arr.indexOf("a")); // returns 2
console.log(arr.lastIndexOf("a")); // returns 2
console.log(arr.indexOf({ name: "Jerry" })); // returns -1
console.log(arr.indexOf(o)); // returns 3
console.log(arr.indexOf([1, 2])); // returns -1
console.log(arr.indexOf("9")); // returns 7
console.log(arr.indexOf(9)); // returns -1
console.log(arr.indexOf("a", 5)); // returns -1
console.log(arr.indexOf(5, 5)); // returns 5
console.log(arr.lastIndexOf(5, 4)); // returns 1
console.log(arr.lastIndexOf(true, 3)); // returns -1