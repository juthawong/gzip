# mako-gzip

> A mako plugin for compressing files using gzip.

[![npm version](https://img.shields.io/npm/v/mako-gzip.svg)](https://www.npmjs.com/package/mako-gzip)
[![build status](https://img.shields.io/travis/makojs/gzip.svg)](https://travis-ci.org/makojs/gzip)
[![coverage](https://img.shields.io/coveralls/makojs/gzip.svg)](https://coveralls.io/github/makojs/gzip)
[![npm dependencies](https://img.shields.io/david/makojs/gzip.svg)](https://david-dm.org/makojs/gzip)
[![npm dev dependencies](https://img.shields.io/david/dev/makojs/gzip.svg)](https://david-dm.org/makojs/gzip#info=devDependencies)
[![code style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Purpose

 - compresses files using node's `zlib.gzip` into a new file
 - the new file is the same path as the input, only given a `.gz` suffix (eg: `index.js -> index.js.gz`)

## API

### gzip(extensions)

The list of file extensions to apply this plugin for.
