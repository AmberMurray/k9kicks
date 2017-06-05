var express = require('express');
var router = express.Router();
console.log('file file file')
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('kjslkdjflaksdjflkjsd')
  res.json([{
      id: 1,
      username: 'samsepi0l'
  }, {
      id: 2,
      username: 'D0loresH4ze'
  }]);
});

module.exports = router;
