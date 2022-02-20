function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: 'I', verb: 'Love', object: 'JavaScript',
};

console.log(getSentence(o));