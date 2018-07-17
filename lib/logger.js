const fs = require('fs')

const envCloudPath = __dirname + '/../../../.env.cloud'
const envLocalPath = __dirname + '/../../../.env'
let envPath

try {
  fs.accessSync(envCloudPath, fs.constants.F_OK)
  envPath = envCloudPath
} catch (err) {
  envPath = envLocalPath
}

require('dotenv').config({path: envPath})

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

    this.pusher.trigger(process.env.PUSHER_LOG_CHANNEL, 'log-event', { kind: 'app', timestamp: new Date, data: data })
  log(level, args) {
  }
}

module.exports = new Logger()
