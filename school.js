const EventEmitter = require('events');


class School extends EventEmitter {
    startPeriod() {
        console.log('class started');

        // raise an events
        setTimeout(() => {
            this.emit('bellRing', {
                first: 'first',
                text: 'period ended'
            })
        }, 2000)
    }
}

module.exports = School;