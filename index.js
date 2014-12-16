var dotpather = require('dotpather')
  , through = require('through')

module.exports = dotpath_stream

function dotpath_stream(path, fallback) {
  var lookup = dotpather(path)

  return through(do_lookup)

  function do_lookup(data) {
    var value = lookup(data)

    if(value === null || typeof value === 'undefined') {
      value = fallback || {}
    }

    this.queue(value)
  }
}
