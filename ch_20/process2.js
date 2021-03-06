const debug = process.env.DEBUG === '1' ?
    console.log : function () {};

debug("Visible only if environment variable DEBUG is set!");

console.log(process.env.DEBUG);
console.log(Boolean(null), Boolean(undefined));

console.log(`Current working dir: ${process.cwd()}`);
process.chdir(__dirname);
console.log(`New current directory: ${process.cwd()}`)