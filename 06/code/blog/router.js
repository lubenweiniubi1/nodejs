var express = require("express")
var User = require("./models/user")
var md5 = require("blueimp-md5")

var router = express.Router()

router.get("/", function (req, res , next) {
  console.log(req.session)
  res.render("index.html", {
    user: req.session.user,
  })
})
router.get("/login", function (req, res , next) {
  res.render("login.html")
})

router.post("/login", async function (req, res , next) {
  //1.获取表单数据
  //2.查询数据库，用户名密码是否正确
  //3.发送响应数据
  var body = req.body
  try {
    if (
      await User.findOne({
        email: body.email,
        password: md5(md5(md5(body.password))),
      })
    ) {
      console.log("登陆陈公公")
      req.session.user = await User.findOne({
        email: body.email,
        password: md5(md5(md5(body.password))),
      })
      res.status(200).json({
        err_code: 0,
        message: "登陆成功",
      })
    }
  } catch (err) {
    res.status(200).json({ err_code: 500, message: "server error" })
  }
})

router.get("/register", function (req, res , next) {
  res.render("register.html")
})

router.post("/register", async function (req, res , next) {
  //1. 获取表单数据，
  //2. 操作数据库
  //   判断该用户是否存在
  //   如果已存在，不允许注册
  //   如果不存在，注册新建用户
  //3. 发送响应
  var body = req.body
  try {
    if (
      await User.findOne({
        $or: [{ email: body.email }, { nickname: body.nickname }],
      })
    ) {
      return res.status(200).json({
        err_code: 1,
        message: "邮箱已存在",
      })
    }
    //对密码进行md5重复加密
    body.password = md5(md5(md5(body.password)))
    var curUser = await new User(body).save()
    //注册成功，通过使用Session记录用户的登陆状态
    req.session.user = curUser

    res.status(200).json({ err_code: 0, message: "ok" })
    // res.redirect("/") 服务器重定向只针对同步请求才有效，异步请求无效
  } catch (err) {
    res.status(500).json({
      err_code: 500,
      message: "Internal err",
    })
  }
})
router.get("/logout", (req, res , next) => {
  console.log("你好萨比")
  //清除登陆状态
  //重定向到登陆页
  //这里同步的
  req.session.user = null
  res.redirect("/login")
})
module.exports = router
