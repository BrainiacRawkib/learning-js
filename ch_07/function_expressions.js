// Immediately Invoked Function Expressions
const message = (function () {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long.`;
})();

console.log(message);

const f = (function () {
    let count = 0;
    return function () {
        return `I have been called ${++count} time(s).`
    }
})()

console.log(f());
console.log(f());