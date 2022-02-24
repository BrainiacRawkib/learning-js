function sum(arr, f) {
    // if no function is supplied, use a "null function" that
    // simply returns its argument unmodified
    if (typeof f !== 'function') f = x => x;
    return arr.reduce((a, x) => a += f(x), 0);
}

function sumOfSquares(arr) {
    return sum(arr, x => x * x);
}

function newSummer(f) {
    return arr => sum(arr, f);
}

const sumOfSquare = newSummer(x => x*x);
const sumOfCube = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquare([1, 2, 3]));
console.log(sumOfCube([1, 2, 3]));