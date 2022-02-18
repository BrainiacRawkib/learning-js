const numStr = '33.3';

const num = Number(numStr);

console.log(num, typeof(numStr), typeof(num));

const a = parseInt('16 volts', 10);

const b = parseInt('3a', 16);
const c = parseFloat('15.5 kph')
const d = parseInt('volts', 10);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const e = new Date();
const ts = d.valueOf();
console.log(ts);