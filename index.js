'use strict'

let debug = require('debug')('mako-gzip')
let utils = require('mako-utils')
let zlib = require('zlib')

module.exports = function (extensions) {
  debug('initialize %j', extensions)

  return function (mako) {
    mako.prewrite(extensions, function gzip (file, build, done) {
      debug('compressing %s', utils.relative(file.path))

      zlib.gzip(file.contents, function (err, buf) {
        if (err) return done(err)
        build.tree.addFile({
          path: `${file.path}.gz`,
          contents: buf
        })
        // TODO: not adding this file as a dependency, since really isn't one.
        done()
      })
    })
  }
}
