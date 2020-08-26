var http = require("http")
var fs = require("fs")
var server = http.createServer()
server.on("request", function (req, res) {
  var url = req.url
  console.log(url)
  if (url === "/") {
    //我们要发送的还是文件中的内容

    fs.readFile("./resources/index.html", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain;charset=utf-8")
        res.end("文件读取失败，请稍后重试")
      } else {
        //data默认二进制，可以通过toString转为我们能识别的字符串
        //res.end()支持两种数据类型：一种二进制，一种字符串
        res.setHeader("Content-Type", "text/html;charset=utf-8")
        res.end(data)
      }
    })
  }else if(url === '/main'){
    fs.readFile("./resources/main.js", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain;charset=utf-8")
        res.end("文件读取失败，请稍后重试")
      } else {
        //data默认二进制，可以通过toString转为我们能识别的字符串
        //res.end()支持两种数据类型：一种二进制，一种字符串
        res.setHeader("Content-Type", "application/x-javascript;charset=utf-8")
        res.end(data)
      }
    })
  }
  else if(url === '/a'){
    fs.readFile("./resources/abs.jpg", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain;charset=utf-8")
        res.end("文件读取失败，请稍后重试")
      } else {
        //data默认二进制，可以通过toString转为我们能识别的字符串
        //res.end()支持两种数据类型：一种二进制，一种字符串
        res.setHeader("Content-Type", "image/jpeg")
        res.end(data)
      }
    })
  }
})
server.listen(3000, function () {
  console.log("Server is running12333")
})
