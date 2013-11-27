dotpath-stream
===

[![Build Status](https://travis-ci.org/jarofghosts/dotpath-stream.png?branch=master)](https://travis-ci.org/jarofghosts/dotpath-stream)

transform object streams by dotpath

## usage

```js
var dps = require('dotpath-stream'),
    imaginary_object_stream

// pretend imaginary_object_stream streams objects like:
// {
//    file: {
//       name: 'filename',
//       stats: (stats object)
//    },
//    blah: 'bleh'
// }

imaginary_object_stream.pipe(dps('file.name')).pipe(process.stdout)
// => 'filename'
imaginary_object_stream.pipe(dps('blah')).pipe(process.stdout)
// => 'bleh'
```

## caveats

if you attempt to reference an undefined value, the `dotpath-stream` **will
stream `undefined`**, though this may change in the future based on feedback
and real world usage.

## license

MIT
