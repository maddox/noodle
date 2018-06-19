const logger = require('./lib/logger');

(function(){
    var oldLog = console.log;
    console.log = function (string) {
      logger.log(string)
      oldLog.apply(console, arguments);
    };
})();
