const coefficients = {
    a: 1,
    // b: 2,
    c: 5,
};

function evaluate(x, c) {
    return c.a + c.b * x + c.c * Math.pow(x, 2);
}

console.log(evaluate(5, coefficients));

const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        if(!/^[a-z]$/.test(key)) return target[key];
        return target[key] || 0;
    },
});

console.log(betterCoefficients.a);
console.log(betterCoefficients.b);
console.log(betterCoefficients.c);
console.log(betterCoefficients.d);
console.log(betterCoefficients.anything);