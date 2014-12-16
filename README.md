dotpath-stream
==============

[![Build Status](https://travis-ci.org/jarofghosts/dotpath-stream.png?branch=master)](https://travis-ci.org/jarofghosts/dotpath-stream)

transform object streams by dotpath lookup

## usage

```js
var dps = require('dotpath-stream')
  , imaginaryObjectStream

// pretend imaginaryObjectStream streams an object like:
//
// {
//     file: {name: 'filename'}
//   , blah: 'bleh'
// }

imaginaryObjectStream.pipe(dps('file.name')).pipe(process.stdout)
// => 'filename'
imaginaryObjectStream.pipe(dps('blah')).pipe(process.stdout)
// => 'bleh'
```

## API

### dps(dotPath, fallback={}) -> TransformStream

Looks up `dotPath` property on whatever object is written to it and streams
result. In the event of that property being absent or otherwise undefined or
null, `fallback` is streamed instead.

## license

MIT
