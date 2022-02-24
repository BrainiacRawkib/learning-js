const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
];

const it1 = book.values();
const it2 = book.values();

console.log(it1.next());
console.log(it1.next());
console.log(it2.next());

const arr = ['a', 'b', {}, 2, function () {}]

const it = arr.values();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());