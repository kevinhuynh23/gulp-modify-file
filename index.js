'use strict'

const through = require('through2')

module.exports = function (fn) {
    return through.obj(function (file, enc, cb) {
        const contents = fn(String(file.contents), file.path, file) || file.contents

        if (file.isBuffer() === true) {
            file.contents = new Buffer.from(contents)
        }

        cb(null, file)
    })
}