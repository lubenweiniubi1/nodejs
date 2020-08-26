const express = require("express")
const app = express()
const port = 3000

//公开指定资源目录
//只要这样做了，你就可以直接通过/public/xx的方式直接访问目录中的所有资源了
app.use("/public/", express.static("./public/"))
app.use("/static/", express.static("./static/"))

////自动帮你处理好了编码
//不用去除url 一个一个if else了
app.get("/", (req, res) => res.send("Hello world!"))

app.get("/about", (req, res) => {
    //可以通过req.query 查询字符串参数
    // Express 和 art-template 结合了 ，res.render('文件名',{模板对象})
  console.log(req.query)
  
  res.send("萨比")
})

app.listen(port, () => console.log(`我正在建通${port}`))
