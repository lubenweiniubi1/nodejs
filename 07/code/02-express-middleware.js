var express = require("express")
const { log } = require("console")

var app = express()

//中间件：处理请求的，本质就是函数

//在Express中，对中间件有几种分类

//当请求进来，会从第一个中间件开始匹配，
//如果匹配就进来
//  进入没有调用next，则请求代码会留在当前中间件
//  调用next后继续向后找到第一个匹配的中间件
//如果不匹配就继续匹配下一个
//不关心请求路径和请求方法的中间件
//也就是说任何请求都会进入这个中间件
//中间件本身是一个方法，该方法接收三个参数
//     Request 请求对象
//     Response 响应对象
//     next 下一个中间件
// 顺序很重要，从上到下，next是一个方法用来调用下一个中间件
// 调用next方法也是要匹配的（不是调用紧挨着的哪一个）
// app.use(function (req, res, next) {
//   console.log("请求进来了  11")
//   next() //弔的是下一个中间件，不然不往后面走
// })
// app.use(function (req, res, next) {
//   console.log("请求进来了  22")
//   next()
// })
// app.use(function (req, res, next) {
//   console.log("请求进来了  33")
//   res.send("333 end")
// })

// app.use(function (req, res, next) {
//   console.log("1")
//   next() //弔的是下一个中间件，不然不往后面走
// })
// //以 /xxx开头的中间件
// app.use("/b", function (req, res, next) {
//   console.log("b")
//   console.log(req.url)
// })
// app.use("/a", function (req, res, next) {
//   console.log("a1") //这里拿到的路径是不包含/a的 ，会包含/a后面的路径
//   console.log(req.url)
// })

// app.use("/a", function (req, res, next) {
//   console.log("a2")
//   console.log(req.url)
// })

//除了以上中间件之外，还有一种常用红的
//严格匹配请求方法和请求路径的中间件
// app.get
// app.post
app.use(function (req, res, next) {
  console.log(1)
  next()
})
app.get("/", (req, res, next) => {
  console.log(2)
  next()
})
app.get("/a", (req, res, next) => {
  console.log(req.url) //这里不会截取
})
app.get("/", (req, res, next) => {
  console.log(3)
})
//如果没有能匹配的中间件，则Express会默认输出：Cannot get xxx
app.listen(3000, () => {
  console.log(`Server started on 3000`)
})
