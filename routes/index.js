
var express = require('express')
var router = express.Router()

/* GET test page for express server. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
