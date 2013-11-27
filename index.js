var through = require('through'),
    dotpather = require('dotpather')

module.exports = dotpath_stream

function dotpath_stream(path) {
  var lookup = dotpather(path)

  return through(do_lookup)

  function do_lookup(data) {
    this.queue(lookup(data))
  }
}
