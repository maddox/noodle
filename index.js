const logger = require('./lib/logger');

(function(){
    var oldLog = console.log;
    console.log = function () {
      logger.log(arguments)
      oldLog.apply(console, arguments)
    };
})();
