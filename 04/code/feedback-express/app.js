var express = require("express")
var bodyParser = require("body-parser")
var app = express()
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
app.use("/public", express.static("./public/"))

//配置使用art-template
//第一个参数表示，当渲染以.art结尾的文件的时候，使用art-template模板引擎
// express-art-template 是专门用来在Express中把art-template 整合到 Express中的
//虽然外面这里不需要加载art-template  但是也必须安装
//原因在于 express-art-template 依赖了 art——template
// app.engine("art", require("express-art-template"))
app.engine("html", require("express-art-template"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Express 为Response 对象提供了一个方法：render
//render方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
// res.render('html模板名称',{模板数据})
// 第一个参数不能写路径，默认去项目中的views目录查找该模板文件
//也就是说Express有约定，开发人员把所有的视图文件都放在views目录中
//也可以html结尾，但是前面的引擎必须改

//如果想要修改默认的views目录，则可以
// app.set('views',render函数的默认路径)
app.get("/", function (req, res) {
  res.render("index.html", {
    comments,
  })
})

app.get("/post", function (req, res) {
  res.render("post.html")
})
/* app.get("/pinglun", function (req, res) {
    var comment = req.query
   comment.dateTime = '2012-12-12 10:50:21'
   comments.unshift(comment)
   res.redirect('/')
 })
 */

//当以POST请求/post的时候，执行指定的处理函数
//这样可以利用不同的请求方法，让一个请求路径使用多次
app.post("/post", function (req, res) {
  //1. 获取表单请求体数据
  //2. 处理
  //3. 发送响应
  //req.query 只能拿get请求参数
  console.log(req.body)

  var comment = req.body
  comment.dateTime = "2020-12-12 1:1:1"
  comments.unshift(comment)
  //res.send res.redirect 这些方法Express会自动结束响应
  res.redirect("/")
})

app.listen(3000, function (req, res) {
  console.log("服务器已经启动")
})
