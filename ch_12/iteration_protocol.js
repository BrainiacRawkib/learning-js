class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }
    [Symbol.iterator](){
        let i = 0;
        const messages = this.messages;
        return {
            next() {
                if(i >= messages.length)
                    return { value: undefined, done: true };
                return { value: messages[i++], done: false };
            }
        }
        // return this.messages.values();
    }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

for (let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}