let n = 22
console.log(n >> 1);
console.log(n >>> 1);
console.log(n = ~n);
console.log(n++);
console.log(n >> 1);
console.log(n >>> 1);

const FLAG_EXECUTE = 1;
const FLAG_WRITE = 2;
const FLAG_READ = 4;

let p = FLAG_READ | FLAG_WRITE;
console.log(p);

let hasWrite = p & FLAG_WRITE;
console.log(hasWrite);

let hasExecute = p & FLAG_EXECUTE;
console.log(hasExecute)

p = p ^ FLAG_WRITE;
console.log(p);

p = p ^ FLAG_WRITE;
console.log(p);

p = p ^ FLAG_WRITE;
console.log(p);

const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE;

console.log(hasReadOrExecute);
console.log(hasReadAndExecute);