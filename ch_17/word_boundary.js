const inputs = [
    "john@doe.com", // nothing but the email
    "john@doe.com is my email", // email at the beginning
    "my email is john@doe.com", // email at the end
    "use john@doe.com, my email", // email in the middle, with comma afterward
    "my email:john@doe.com.", // email surrounded with punctuation
];

const emailMatcher =
    /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;

const res = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));

console.log(res);