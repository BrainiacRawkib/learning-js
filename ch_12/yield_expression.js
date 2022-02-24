function* interrogate() {
    const name = yield 'What is your name?';
    const color = yield 'What is your favorite color?';
    return `${name}'s favorite color is ${color}`;
}

const it = interrogate();
console.log(it.next());
console.log(it.next('Mallam'));
console.log(it.next('orange'));

function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}
const it2 = abc();
console.log(it2.next()); // { value: 'a', done: false }
console.log(it2.next()); // { value: 'b', done: false }
console.log(it2.next()); // { value: 'c', done: true }

for (let l of abc()) {
    console.log(l);
}