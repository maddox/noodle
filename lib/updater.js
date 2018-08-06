const exec = require('child_process').exec

var update = function() {
  const path = __dirname + '/../../'
  exec(`cd ${path} && git pull origin "$(git rev-parse --abbrev-ref HEAD)"`, function(error, stdout, stderr) {
    console.log({error});
    console.log({stdout});
    console.log({stderr});

    setTimeout( () => {
      update(path)
    }, 2000)
  })
}

module.exports.update = update;
