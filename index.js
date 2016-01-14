var type = 'css preprocessor';
var extnames = ['.scss', '.sass'];
var rename = require('./lib/rename');
var render = require('./lib/render');

function create(opts) {
  return {
    type: type,
    extnames: extnames,
    rename: rename,
    render: render
  };
}

exports.create = create;
