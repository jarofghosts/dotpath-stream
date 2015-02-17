var dotpather = require('dotpather')
  , through = require('through')

module.exports = dotpathStream

function dotpathStream(path, fallback) {
  var lookup = dotpather(path)

  return through(doLookup)

  function doLookup(data) {
    var value = lookup(data)

    if(typeof value === 'undefined') {
      value = fallback
    }

    this.queue(value)
  }
}
