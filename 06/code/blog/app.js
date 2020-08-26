var express = require("express")
var path = require("path")
var app = express()
var router = require("./router")
var bodyParser = require("body-parser")
var session = require("express-session")

app.use("/public/", express.static(path.join(__dirname, "./public/")))
app.use(
  "/node_modules/",
  express.static(path.join(__dirname, "./node_modules/"))
)

//一定要在路由之前配置body解析请求插件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//在Express这个框架中，默认不支持Session和Cookie
//但是我们可以使用第三方中间件：express-session来解决
//1.npm install express-session
//2.配置(一定要在路由之前)
//3。使用
//    当把这个插件配置好之后，我们就可以通过req.session来访问和设置Session成员了
//    添加Session数据 req.session.foo = 'bar'
//     访问Session数据 req.session.foo
app.use(
  session({
    //自定义的字符串，类似于加密数据后拼一个 itcast，配置加密字符串，它会在原有加密基础上 和这个字符串拼起来去加密
    //为了增加安全性，防止客户端恶意伪造session
    secret: "itcast",
    resave: false,
    saveUninitialized: true, //无论你是否使用session 我都默认直接给你分配一把钥匙
  })
)

//在Node中，有很多第三方模板引擎都可以使用，不是只有art-template
app.engine("html", require("express-art-template"))
app.set("views", path.join(__dirname, "./views/")) //默认就是views，这里重复加深记忆


//把路由挂载到app中
app.use(router)

//配置一个 404中间件
app.use(function (req, res) {
  res.render("404.html")
})

//错误处理中间件处理
app.use(function (err, req, res, next) {
  console.error(err)
  res.status(500).send({
    err_code: 500,
    message: err.message,
  })
})
app.listen(3000, () => {
  console.log(`Server started on 300000000000000000`)
})
