"use strict";

// es6 feature: block-speed "let" declaration
const sentences = [
    { subject: 'Python', verb: 'is', object: 'awesome' },
    { subject: 'Lions', verb: 'are', object: 'fearless' },
];

// es6 feature: object destructuring
function say({ subject, verb, object }) {
    // es6 feature: template strings
    // note that quotes below are backticks (`), not single quotes (')
    console.log(`${subject} ${verb} ${object}`)
}

// es6 feature: for..of
for(let s of sentences){
    say(s);
}