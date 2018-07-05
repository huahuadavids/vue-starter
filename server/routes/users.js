var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get ===  with a resource');
});
router.post('/', function(req, res, next) {
  res.send('post ===  with a resource');
});
router.get('/david', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
