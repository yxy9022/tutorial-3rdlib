/**
 * 链接: https://www.npmjs.com/package/tiny-emitter
 */
var Emitter = require('tiny-emitter');
var emitter = new Emitter();

emitter.on('some-event', function (arg1, arg2, arg3) {
  //
});

emitter.emit('some-event', 'arg1 value', 'arg2 value', 'arg3 value');
