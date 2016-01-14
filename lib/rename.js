var path = require('path');

var map = {
  '.scss': '.css',
  '.sass': '.css'
}

function rename(relative) {
  var location;

  var extname = path.extname(relative);
  var basename = path.basename(relative, extname);
  var dirname = path.dirname(relative);

  extname = map[extname] || extname;

  location = path.join(dirname,  basename + extname);

  return location;
}

module.exports = rename;
