const dates = [];

const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;

for (let i = 0; i < 10; i++) {
    dates.push(new Date(min + delta * Math.random()));
}

// dates are random and (probably) jumbled
// we can sort them (descending):

dates.sort((a, b) => b - a);

// or ascending:
dates.sort((a, b) => a - b);

const m = moment();
m.add(3, 'days');
m.subtract(2, 'years');

const m = moment();
m.startOf('year');
m.endOf('month')

// chaining in moment.js
const m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');
// m is the end of the month you would be in if you
// traveled 10 hours into the future then 3 days back
