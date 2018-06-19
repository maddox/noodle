const fs = require('fs')

const envCloudPath = __dirname + '/../../../.env.cloud'
const envLocalPath = __dirname + '/../../../.env'
let envPath

if (fs.accessSync(envCloudPath, fs.constants.F_OK)) {
  envPath = envCloudPath
}else if (fs.accessSync(envLocalPath, fs.constants.F_OK)) {
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

  log(string) {
    this.pusher.trigger(process.env.PUSHER_LOG_CHANNEL, 'log-event', { kind: 'app', line: string, timestamp: new Date })
  }
}

module.exports = new Logger()
