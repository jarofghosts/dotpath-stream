dotpath-stream
==============

[![Build Status](http://img.shields.io/travis/jarofghosts/dotpath-stream.svg?style=flat)](https://travis-ci.org/jarofghosts/dotpath-stream)
[![npm install](http://img.shields.io/npm/dm/dotpath-stream.svg?style=flat)](https://www.npmjs.org/package/dotpath-stream)

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

### dps(dotPath, _fallback) -> TransformStream

Looks up `dotPath` property on whatever object is written to it and streams
result. In the event of that property being absent or otherwise undefined,
`fallback` is streamed instead if provided.

## license

MIT
