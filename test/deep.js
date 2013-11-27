var assert = require('assert'),
    dps = require('../'),
    rs = require('stream').Readable({ objectMode: true }),
    ws = require('stream').Writable(),
    run = 1

rs._read = function () {
  this.push({ hello: { beakmans: 'world' } })
  this.push({ hello: { beakmans: 'dolly' } })
  this.push({ hello: { beakmans: 'consumer' } })
  this.push(null)
}

ws.write = function (chunk, enc, next) {
  var str = chunk.toString()
  if (run == 1) assert.equal(str, 'world')
  if (run == 2) assert.equal(str, 'dolly')
  if (run == 3) assert.equal(str, 'consumer')
  run++
}

rs.pipe(dps('hello.beakmans')).pipe(ws)
