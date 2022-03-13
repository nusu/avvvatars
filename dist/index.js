
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./avvvatars-react.cjs.production.min.js')
} else {
  module.exports = require('./avvvatars-react.cjs.development.js')
}
