f();

function f() {
    console.log('f is hoisted!');
}

g();
let g = function () {
    console.log('g isn\'t hoisted!');
}