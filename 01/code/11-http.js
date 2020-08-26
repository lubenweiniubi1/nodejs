var http = require("http")
var server = http.createServer()
server.on("request", function (req, res) {
  //在服务器默认发送的数据是UTF-8
  //但是浏览器不知道你是utf8编码
  //浏览器不知道服务器的编码情况下，会按照操作系统默认编码去解析
  //中文操作系统默认gbk
  //告诉浏览器我的编码
  //在http协议中Content-Type用来告诉你我发送的数据是什么类型

  //   res.setHeader('Content-Type','text/plain;charset=utf-8')
  //   res.end("Hello 世界")
  var url = req.url
  if (url === "/plain") {
    //text/plain 普通文本
    res.setHeader("Content-Type", "text/plain;charset=utf-8")
    res.end("hello 世界")
  } else if (url === "/html") {
    //浏览器解析称html了
    // 如果你发送的是标签，则告诉浏览器你发送 的是 text/html 文本
    res.setHeader('Content-Type','text/html;charset=utf-8')
  
    res.end('<p>尼玛死了 ，我是你爹<a href="#">12312</a></p>')
  }
})
server.listen(3000, function () {
  console.log("Server is running112123")
})
