const debug1 = require('./custom_debug')('one');
const debug2 = require('./custom_debug')('two');

debug1('started first debugger!');
debug2('started second debugger!');

setTimeout(function () {
    debug1('after some time...');
    debug2('what happens?');
}, 200);