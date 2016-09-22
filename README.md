# mako-gzip

> A [mako][mako] plugin for compressing files using gzip.

[![npm version][npm-badge]][npm]
[![build status][travis-badge]][travis]
[![coverage][coveralls-badge]][coveralls]
[![npm dependencies][david-badge]][david]
[![npm dev dependencies][david-dev-badge]][david-dev]
[![nsp status][nsp-badge]][nsp]
[![code style][standard-badge]][standard]

## Purpose

 - compresses files using node's `zlib.gzip` into a new file
 - the new file is the same path as the input, only given a `.gz` suffix (eg: `index.js -> index.js.gz`)

## API

### gzip(extensions)

The list of file extensions to apply this plugin for.


[coveralls-badge]: https://img.shields.io/coveralls/makojs/gzip.svg
[coveralls]: https://coveralls.io/github/makojs/gzip
[david-badge]: https://img.shields.io/david/makojs/gzip.svg
[david-dev-badge]: https://img.shields.io/david/dev/makojs/gzip.svg
[david-dev]: https://david-dm.org/makojs/gzip#info=devDependencies
[david]: https://david-dm.org/makojs/gzip
[mako]: https://github.com/makojs/core
[npm-badge]: https://img.shields.io/npm/v/mako-gzip.svg
[npm]: https://www.npmjs.com/package/mako-gzip
[nsp-badge]: https://nodesecurity.io/orgs/mako/projects/f3f1b603-df5a-4b5d-bde0-650ffcbd28ec/badge
[nsp]: https://nodesecurity.io/orgs/mako/projects/f3f1b603-df5a-4b5d-bde0-650ffcbd28ec
[standard-badge]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard]: http://standardjs.com/
[travis-badge]: https://img.shields.io/travis/makojs/gzip.svg
[travis]: https://travis-ci.org/makojs/gzip
