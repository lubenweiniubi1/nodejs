var http = require("http")

//1.创建 Server
var server = http.createServer()
//2.监听请求事件，设置处理函数
server.on("request", function (req, res) {
  console.log("收到请求了，请求路径是:" + req.url)
  console.log(req.socket.remoteAddress,req.socket.remotePort)

  //   res.write("sabi")
  //   res.end()
  //上面的方式不叫玛法，推荐更简单的方式，直接end的同时发送数据
  //   res.end("hello sabi")

  //根据同的请求路径发送不同的响应结果
  //1.获取请求路径
  // req.url 获取的是端口号之后的那一部分路径，所有的url都是以/开头的
  //2.判断路径处理响应

  var url = req.url
  if (url === "/") {
    res.end("index page")
  } else if (url === "/login") {
    res.end("login page")
  } else if (url === "/products") {
    var prods = [
      {
        name: "苹果",
        price: "9999",
      },
      {
        name: "苹果",
        price: "9999",
      },
      {
        name: "苹果",
        price: "9999",
      },
      {
        name: "苹果",
        price: "9999",
      },
      {
        name: "苹果",
        price: "9999",
      },
      {
        name: "苹果",
        price: "9999",
      },
    ]
    //响应内容只能是二进制数据或者字符串
    //数字，对象，数组，布尔值 ，统统不行
    res.end(JSON.stringify(prods))
  } else {
    res.end("404")
  }
})
//3.绑定端口号，启动服务,80是默认端口
server.listen(80, function () {
  console.log("服务器启动成功，可以访问了")
})
