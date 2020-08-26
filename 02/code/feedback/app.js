//app application应用程序
//把当前模块的依赖项声明在文件的最上面
// 可以灵活的控制哪些资源可以访问
var http = require("http")
var fs = require("fs")
var artTemp = require("art-template")
var urlModule = require("url")
const comments = [
  {
    name: "张三",
    message: "today weather good",
    dateTime: "20150102",
  },
  {
    name: "张三2",
    message: "today weather good",
    dateTime: "20150102",
  },
  {
    name: "张三3",
    message: "today weather good",
    dateTime: "20150102",
  },
  {
    name: "张三4",
    message: "today weather good",
    dateTime: "20150102",
  },
  {
    name: "张三5",
    message: "today weather good",
    dateTime: "20150102",
  },
]
//pinglun?name=dedesa&message=kljosajdflkj
//由于表单提交路径有用户动态填写的内容
//所以不能判断整个url

//结论  ：对于我们来讲只需要判断，如果你的请求路径是/pinglun 的时候，我认为你的表单数据过来了

http
  .createServer(function (req, res) {
    //将路径解析为方便操作的对象，第二个参数表示直接将查询字符串转换为一个对象（通过query属性访问）
    var urlObj = urlModule.parse(req.url, true)
    const pathname = urlObj.pathname
    // var url = req.url
    //单独获取不包含查询字符串的路径部分，不包含问号之后的内容
    if (pathname === "/") {
      fs.readFile("./pages/index.html", function (err, data) {
        if (err) {
          return res.end("404 not Found")
        }
        var c = artTemp.render(data.toString(), { comments })
        res.end(c)
      })
    } else if (pathname.indexOf("/public/") === 0) {
      //  /public/css/main.css
      // /public/js/a.js

      fs.readFile("." + pathname, function (err, data) {
        if (err) {
          return res.end("404 静态资源没找到")
        }
        res.end(data)
      })
    } else if (pathname === "/post") {
      fs.readFile("./pages/post.html", function (err, data) {
        if (err) {
          return res.end("404 Not found")
        }
        res.end(data)
      })
    } else if (pathname === "/pinglun") {
      console.log("进入评论关节:", urlObj)
      
      //我们已经用url.parse方法获取到了路径中的查询字段了，并解析成一个对象了
      //我们接下来需要做的是
      //获取表单的 query，生成日期到对象中，然后存储到数组中，让用户重定向的/页面 ，当用户重新请求/数据已经发声变化
      var comment= urlObj.query
      comment.dateTime = "20198888"
      comments.push(comment)

      //跳转到/首页

      //如何通过服务器让用户重定向？
      // 1，状态码设置成302 临时重定向 
      // 2，在响应头中通过Location告诉客户端往哪里重定向
      // 如果客户端发现服务器响应的状态码是302 就会自动去响应头中找Location  ，然后对该地址发起新的请求
      res.statusCode = 302 
      res.setHeader('Location','/')
      res.end()
    } else {
      fs.readFile("./pages/404.html", function (err, data) {
        if (err) {
          return res.end("404 not found")
        }
        res.end(data)
      })
    }
  })
  .listen(3000, function () {
    console.log("服务器app已启动")
  })
