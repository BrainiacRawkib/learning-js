function sayHello() {
    return 'Hola World!';
}

console.log(sayHello());
console.log(sayHello);

// assign function to an object property
const obj = {};
obj.f = sayHello;
console.log(obj);

// or even add a function to an array
const arr = [1, 2, 3]
console.log(arr);
arr[1] = sayHello;
console.log(arr, arr[1]());