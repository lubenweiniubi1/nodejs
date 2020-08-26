var express = require("express")
var fs = require("fs")
var app = express()

app.use(function (req, res, next) {
  console.log(1)
  next()
})
// app.get("/abc", (req, res, next) => {
//   console.log("abc 1")
//   req.foo = "shit" //在这里设置
//   next()
// })

// app.get("/abc", (req, res, next) => {
//   console.log("abc 2")
//   console.log(req.foo) //在这里就可以使用了
// })

app.get("/", (req, res, next) => {
  //禅模式  zen code F11
  fs.readFile("./d/asdfdas/sda", function (err, data) {
    if (err) {
      //当调用next传蒂参数会直接进入四个参数的那个应用程序级别中间件程序 use，也就是说楼下那个get('/‘)进不去
      //当发声错误的时候，我们可以调用next传递错误对象
      //然后就会被全局错误中间件匹配到，并处理之
      next(err) //传参数会直接进入四个参数的那个！
    }
  })
})
app.get("/", (req, res, next) => {
  console.log("/2")
})
app.get("/a", (req, res, next) => {
  //禅模式  zen code F11
  fs.readFile("./d/asdfdas/sda", function (err, data) {
    if (err) {
      next(err)
    }
  })
})

//错误处理中间件处理
app.use(function (err, req, res, next) {
  console.error(err)
  res.status(500).send(err.message)
})
//如果没有能匹配的中间件，则Express会默认输出：Cannot get xxx
app.listen(3000, () => {
  console.log(`Server started on 3000`)
})
