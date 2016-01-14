var type = 'css preprocessor';
var extnames = ['.scss', '.sass'];
var rename = require('./lib/rename');
var render = require('./lib/render');

exports.type = type;
exports.extnames = extnames;
exports.rename = rename;
exports.render = render;
