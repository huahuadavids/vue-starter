/**
 * Created by ali-69044 on 2017/11/29.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: 'david'
  })
});

module.exports = router;
