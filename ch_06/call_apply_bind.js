const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
    return `Hello, I'm ${this.name}!`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// .call() takes args directly
console.log(update.call(bruce, 1949, 'singer'));
console.log(update.call(madeline, 1949, 'actress'));

// .apply() takes args as ana array
console.log(update.apply(bruce, [1955, 'singer']));

const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

const updateBruce = update.bind(bruce)
console.log(updateBruce);

console.log(update.call(bruce, 1949, 'actor'));