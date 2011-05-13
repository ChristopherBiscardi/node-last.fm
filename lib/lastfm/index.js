exports.configure = function(options){
  exports.artist.configure(options);
  }
exports.album = require('./album');
exports.artist = require('./artist');
exports.auth = require('./auth');
exports.chart = require('./chart');
exports.event = require('./event');
exports.geo = require('./geo');
exports.group = require('./group');
exports.library = require('./library');
exports.playlist = require('./playlist');
exports.radio = require('./radio');
exports.tag = require('./tag');
exports.tasteometer = require('./tasteometer');
exports.track = require('./track');
exports.user = require('./user');
exports.venue = require('./venue');
