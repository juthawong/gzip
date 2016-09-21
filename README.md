# mako-gzip

> A [mako][mako] plugin for compressing files using gzip.

[![npm version][npm-badge]][npm]
[![build status][travis-badge]][travis]
[![coverage][coveralls-badge]][coveralls]
[![npm dependencies][david-badge]][david]
[![npm dev dependencies][david-dev-badge]][david-dev]
[![code style][standard-badge]][standard]

## Purpose

 - compresses files using node's `zlib.gzip` into a new file
 - the new file is the same path as the input, only given a `.gz` suffix (eg: `index.js -> index.js.gz`)

## API

### gzip(extensions)

The list of file extensions to apply this plugin for.


[mako]: https://github.com/makojs/core
[coveralls]: https://coveralls.io/github/makojs/gzip
[coveralls-badge]: https://img.shields.io/coveralls/makojs/gzip.svg
[david]: https://david-dm.org/makojs/gzip
[david-badge]: https://img.shields.io/david/makojs/gzip.svg
[david-dev]: https://david-dm.org/makojs/gzip#info=devDependencies
[david-dev-badge]: https://img.shields.io/david/dev/makojs/gzip.svg
[npm]: https://www.npmjs.com/package/mako-gzip
[npm-badge]: https://img.shields.io/npm/v/mako-gzip.svg
[standard]: http://standardjs.com/
[standard-badge]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[travis]: https://travis-ci.org/makojs/gzip
[travis-badge]: https://img.shields.io/travis/makojs/gzip.svg
