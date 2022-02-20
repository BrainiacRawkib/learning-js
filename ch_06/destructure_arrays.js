function getSentence([subject, verb, object]) {
    return`${subject} ${verb} ${object}`;
}

const arr = ['I', 'Love', 'JavaScript'];

console.log(getSentence(arr));