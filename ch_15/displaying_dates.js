const d = new Date(Date.UTC(1930, 4, 10));

console.log(d.toLocaleDateString());
// console.log(d.toLocaleFormat());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toJSON());
console.log(d.toTimeString());
console.log(d.toUTCString());


// using moment.js module
const moment = require('moment');

moment(d).format("YYYY-MM-DD"); // "1930-05-09"
moment(d).format("YYYY-MM-DD HH:mm"); // "1930-05-09 17:00
moment(d).format("YYYY-MM-DD HH:mm Z"); // "1930-05-09 17:00 -07:00
moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"); // "1930-05-09 17:00 UTC-07:00
moment(d).format("dddd, MMMM [the] Do, YYYY"); // "Friday, May the 9th, 1930"
moment(d).format("h:mm a"); // "5:00 pm"