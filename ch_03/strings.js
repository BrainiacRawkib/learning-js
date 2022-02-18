const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!";
const dialog2 = 'Sam looked up, and said \`\' "hello, old friend!", as Max walked in.';

console.log(dialog);
console.log(imperative);
console.log(dialog2);
console.log(`\``);

let currentTemp = 19.5;
const msg = `The current temperature is \$ ${currentTemp}\u00b0c`;
console.log(msg);

const multiline = "line1\
line2";

const multiline2 = "line1\n\
line2";

console.log(multiline)
console.log(multiline2)

const multiline3 = `--->line1
line2
line3`;
console.log(multiline3)

const multilineconcat = "line1\n" +
    "line2\n" +
    "line3\n"

console.log(multilineconcat);

const mixmatch = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` +
    "Don't worry...the heat is on!";
console.log(mixmatch);

const result1 = 3 + '30';
const result2 = 3 * '30';
console.log(result1, result2);

const s = 'hello';

console.log(s.toUpperCase());