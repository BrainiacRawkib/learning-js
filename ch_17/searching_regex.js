const input = "As I was going to Saint Ives";

const re = /\w{3,}/ig;

console.log(input.match(re));
console.log(input.search(re));

console.log(re.test(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));