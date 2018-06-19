require('dotenv').config({path: __dirname + '/../.env.cloud'})

const Pusher = require('pusher');

class Logger {
  constructor() {
    this.pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster: process.env.PUSHER_CLUSTER,
    })
  }

  log(string) {
    this.pusher.trigger(process.env.PUSHER_LOG_CHANNEL, 'log-event', { kind: 'app', line: string, timestamp: new Date })
  }
}

module.exports = new Logger()
