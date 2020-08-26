var http = require("http")

var server = http.createServer()

//request 请求时间需要接受两个参数：
//  Request 请求对象
//   请求对象可以用来获取客户端的一些信息，例如请求路径
//  Response 响应对象
//  响应对象可以用来给客户端发送响应消息
server.on("request", function (request, response) {
  //127.0.0.1:3000/    /
  //@：3000/a      /a
  console.log("收到到客户端的请求了,请求路径是:" + request.url)

  //response对象有个方法： write 可以用来给客户端发送响应数据
  // write可以使用多次，但是最后一定要使用end结束相应 ，否则客户端会一直等待
  response.write("hello")
  response.write(" nodejs")
  //告诉客户端，我的话说完了，你可以呈现给用户了
  response.end()

  //由于现在我们的服务器的能力还非常的弱，无论是什么请求 都只能响应hello nodejs
  //思考 ：
  // 我希望当请求 不同的路径的时候响应不同的结果
  //favicon.ico是收藏家图标
  // /index
  // /log 登陆
  // /register 注册  request.url取出来自己判断 if else
})

server.listen(3000, function () {
  console.log("服务器启动成功了，可以通过127.0.0.1：3000 来进行访问了")
})
