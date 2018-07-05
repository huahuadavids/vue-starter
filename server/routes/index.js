var express = require('express');
var router = express.Router();
var path = require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  /*
   res.redirect("/users"); //重定向
   res.cookie("id","111");//设置cookie
   res.status(200);//设置HTTP状态码
   res.type("text/html;charset=utf-8");//设置Content-Type的MIME类型
   res.send("haha");//返回信息
   res.json({name: "david"}); // 返回json数据
   res.sendFile（path [，options] [，fn]）：
   // 传送指定路径的文件 -会自动根据文件extension设定Content-Type
   var myPath = path.resolve('public', 'demo.html');
   res.sendFile(myPath);

   myPath = path.resolve('public', 'images/1.png');
   res.download(myPath);/下载图片


   var q = req.query;
   console.log(q) // {name:"david"}
   console.log(req.path) //  结果是 /
   req.cookies   // {name:"david",id: '11'}
   req.params：获取路由的parameters
  */

  res.render('index', { title:  "haha" });
});

module.exports = router;
