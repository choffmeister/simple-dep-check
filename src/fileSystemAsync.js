const fs = require('fs')
const glob = require('glob')

function readFileAsync(file) {
  return new Promise((resolve, reject) => fs.readFile(file, 'utf8', (err, res) => (!err ? resolve(res) : reject(err))))
}

function globAsync(pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => (!err ? resolve(files) : reject(err)))
  })
}

module.exports = {
  readFileAsync,
  globAsync,
}
