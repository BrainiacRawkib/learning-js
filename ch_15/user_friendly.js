const moment = require('moment');

moment().subtract(10, 'seconds').fromNow(); // a few seconds ago
moment().subtract(44, 'seconds').fromNow(); // a few seconds ago
moment().subtract(45, 'seconds').fromNow(); // a minute ago
moment().subtract(5, 'minutes').fromNOw(); // 5 minutes ago
moment().subtract(44, 'minutes').fromNOw(); // 44 minutes ago
moment().subtract(45, 'minutes').fromNOw(); // an hour ago
moment().subtract(5, 'hours').fromNOw(); // 4 hours ago
moment().subtract(21, 'hours').fromNOw(); // 21 hours ago
moment().subtract(22, 'hours').fromNOw(); // a day ago
moment().subtract(344, 'days').fromNOw(); // 344 days ago
moment().subtract(345, 'days').fromNOw(); // a year ago