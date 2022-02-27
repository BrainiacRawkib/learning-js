let html = '<a class="nope" href="/yep">Yep</a>';
let out = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');

console.log(out);

let html2 = '<a class="yep" href="/yep" id="nope">Yep</a>';
let out2 = html2.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');

console.log(out2);


// REPLACEMENT MACROS
const input = "One two three";

console.log(input.replace(/two/, '($`)'));
console.log(input.replace(/\w+/g, '($&)'));
console.log(input.replace(/two/, "($')"));
console.log(input.replace(/two/, "($$)"));