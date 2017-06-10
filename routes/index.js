
const express = require('express')
const router = express.Router()

/* GET test page for express server. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
