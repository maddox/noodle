const updater = require('./lib/updater');
const logger = require('./lib/logger');

(function(){
    var oldLog = console.log;
    console.log = function () {
      logger.info(arguments)
      oldLog.apply(console, arguments)
    };

    var oldWarn = console.warn;
    console.warn = function () {
      logger.warn(arguments)
      oldWarn.apply(console, arguments)
    };

    var oldError = console.error;
    console.error = function () {
      logger.error(arguments)
      oldError.apply(console, arguments)
    };
})();

// updater.update()
