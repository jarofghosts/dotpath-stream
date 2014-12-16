var test = require('tape')

var dps = require('../')

test('looks up properties on streamed objects', function(t) {
  t.plan(2)

  var stream = dps('hello')

  stream.once('data', function(data) {
    t.equal(data, 'world')
  })

  stream.write({hello: 'world'})

  stream.once('data', function(data) {
    t.equal(data, 'dolly')
  })

  stream.write({hello: 'dolly'})
})

test('looks up deeply nested properties', function(t) {
  t.plan(2)

  var stream = dps('hello.beakmans')

  stream.once('data', function(data) {
    t.equal(data, 'world')
  })

  stream.write({hello: {beakmans: 'world'}})

  stream.once('data', function(data) {
    t.equal(data, 'lester')
  })

  stream.write({hello: {beakmans: 'lester'}})
})

test('delegates to fallback for null/undefined if provided', function(t) {
  t.plan(2)

  var stream = dps('hello.beakmans', 'world')

  stream.once('data', function(data) {
    t.equal(data, 'world')
  })

  stream.write({})

  stream.once('data', function(data) {
    t.equal(data, 'lester')
  })

  stream.write({hello: {beakmans: 'lester'}})
})

test('fallback defaults to {}', function(t) {
  t.plan(1)

  var stream = dps('hello.beakmans')

  stream.once('data', function(data) {
    t.deepEqual(data, {})
  })

  stream.write({herp: 'derp'})
})
