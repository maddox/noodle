require('dotenv').config()
const request = require('request')

class Logger {

  log(args) {
    this.sendLog('log', args)
  }

  info(args) {
    this.sendLog('info', args)
  }

  warn(args) {
    this.sendLog('warn', args)
  }

  error(args) {
    this.sendLog('error', args)
  }

  sendLog(level, args) {
    if (!process.env.LOG_CHANNEL) {
      return
    }

    var options = {
      url: 'https://wormhole.now.sh/log',
      method: 'POST',
      json: true,
      headers: {
        'Authorization': `Bearer ${process.env.WORMHOLE_AUTH_TOKEN}`,
      }
    }

    let data
    data = Array.from(args)

    data.forEach(dataItem => {
      const payload = {
        type: 'log',
        level: level,
        source: 'app',
        timestamp: new Date(),
        data: dataItem,
      }

      const data = {logChannel: process.env.LOG_CHANNEL, payload: payload}
      options.body = data

      request(options)
    })
  }
}

module.exports = new Logger()
