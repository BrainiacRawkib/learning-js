const moment = require('moment');

const d = new Date(Date.UTC(2022, 2, 21));
console.log(d);

const m = moment.tz([2022, 2, 27, 9, 19], 'America/Los_Angeles').toDate();
