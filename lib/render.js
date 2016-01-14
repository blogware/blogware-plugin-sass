var path = require('path');
var sass = require('node-sass');

function render(file, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
  }

  opts = opts || {};
  opts.data = file.contents.toString('utf8');
  opts.includePaths = [ path.resolve('_sass') ];

  sass.render(opts, function(err, rendered) {
    if (err) return cb(err);

    cb(null, rendered.css);
  });
}

module.exports = render;
