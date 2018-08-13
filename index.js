const updater = require('./lib/updater');
const logger = require('./lib/logger');

(function(){
    var oldLog = console.log;
    console.log = function () {
      logger.info(arguments)
      if (!process.env.NOODLE_ENV) {
        oldLog.apply(console, arguments)
      }
    };

    var oldWarn = console.warn;
    console.warn = function () {
      logger.warn(arguments)
      if (!process.env.NOODLE_ENV) {
        oldWarn.apply(console, arguments)
      }
    };

    var oldError = console.error;
    console.error = function () {
      logger.error(arguments)
      if (!process.env.NOODLE_ENV) {
        oldError.apply(console, arguments)
      }
    };
})();

// updater.update()
