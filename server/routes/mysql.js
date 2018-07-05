/**
 * Created by ali-69044 on 2017/11/29.
 */
var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var res;
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'huahua'
  //ssl  : { // ssl验证
  //  ca : fs.readFileSync(__dirname + '/mysql-ca.crt')
  //}
});

/*
 连接池用法
 var pool  = mysql.createPool({
 connectionLimit : 10,
 host            : 'example.org',
 user            : 'bob',
 password        : 'secret',
 database        : 'my_db'
 });
 pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
 });

 */


connection.connect();
/*
 rows 是一个数组，保存了sql的所有记录
 */
connection.query('select * from persons', function (err, rows, fields) {
  if (err) throw err;
  console.log(rows.length)
  console.log(rows[0]["Age"])
  res = rows;
});
//关闭连接
connection.end();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(res)
});

module.exports = router;
