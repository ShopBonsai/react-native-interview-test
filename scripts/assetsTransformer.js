const path = require("path")

module.exports = {
  process: (source, filename) => `module.exports = ${JSON.stringify(path.basename(filename))}`,
}
