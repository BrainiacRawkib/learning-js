const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g);
const end = input.match(/\w+$/g);
const everything = input.match(/^.*$/);
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);

console.log(beginning);
console.log(end);
console.log(everything);
console.log(nomatch1);
console.log(nomatch2);

const input2 = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input2.match(/^\w+/mg); // ["One", "Two", "Three", "Four"]
const endings = input2.match(/\w+$/mg); // ["line", "lines", "lines", "Four"]

console.log(beginnings);
console.log(endings);