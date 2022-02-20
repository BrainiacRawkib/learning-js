function avg(a, b) {
    return (a + b) / 2;
}

console.log(avg(20, 40));

function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
}

let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

function fmsg(o) {
    o.message = `set in f (previous value: '${o.message}')`
}

let o = {
    message: 'initial value'
};

console.log(`before calling f: o.message="${o.message}"`);
fmsg(o);
console.log(`after calling f: o.message="${o.message}"`);