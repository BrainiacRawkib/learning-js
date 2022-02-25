const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter{
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go(){
        const countdown = this;
        const timeoutIds = [];

        return new Promise(function (resolve, reject) {
            for (let i=countdown.seconds; i>=0; i--) {
                timeoutIds.push(setTimeout(function () {
                    if (countdown.superstitious && i===13)
                        return reject(new Error('DEFINITELY NOT CATCHING THAT'));
                    countdown.emit('tick', i);
                    if (i === 0)
                        resolve();
                }, (countdown.seconds-i)*1000));
            }
        });
    }
}
