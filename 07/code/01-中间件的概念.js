//中间件就是中间处理环节，有输入有输出
var http = require("http")
var url = require("url")
var cookie = require("./middlewars/cookie")
var session = require("./middlewars/session")
var postBody = require("./middlewars/post-body")
var query = require("./middlewars/query")
var artT = require("./middlewars/template")

var server = http.createServer(function (req, res) {
  //解析表单get请求体
  //解析表单post请求体
  //解析cookie
  //处理Session
  //使用模板引擎
  console.log(req.query)
  console.log(req.body)
  console.log(req.cookies)
  console.log(req.session)

  //解析请求地址中的get参数
  // var urlObject = url.parse(req.url, true)
  // req.query = urlObj.query
  query(req, res)

  //解析请求地址中的post参数S
  postBody(req, res)

  //解析cookies
  cookie(req)

  //解析配置Session
  session(req)

  //配置模板引擎
  artT(req)

  //上面的过程都是为了在后面做具体业务操作处理的时候更方便,上面的环节步骤可以封装成一个一个小文件，这就是中间件
  //只需要加载起来，他就运行了

  if(req.url === 'xxx'){
    //处理
    //query,body ，session,cookie API成员使用
  }else if( req.url ==='sabe') {

  }
})

server.listen(3000, function () {
  console.log("3000. is running")
})

//用户的请求（带有数据）就好比从水源拿到水
//服务端就要去处理，处理的过程，简单一点可以一步处理完，但是实际上可以把处理过程分步到各个环节当中，
//每个环节做固定的工作，就如同水厂将河水加工成自来水那样，有很多加工环节。最后才到达用户的浏览器里面
