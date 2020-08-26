var express = require("express")

//1.创建 app
var app = express()

//当以 /public/开头的时候去 ./public/目录中查找对应的资源
//这种方式更容易辨识 推荐
// app.use('/public/',express.static('./public/'))


//当省略第一个参数的时候，可以通过 省略 /public 的方式来访问
// app.use(express.static('./public/'))
//必须以 /a/开头
app.use('/abc/d',express.static('./public/'))

app.get('/',function(req,res){
    // res.write("hello") //原来的api依然存在nod
    // res.end()  
    res.send("hello world")
})
app.get('/login',function(req,res){
    // res.write("hello") //原来的api依然存在
    // res.end()  
    res.send(`
     <html>
       <body>
       <h1>我在登陆</h1>
       </body>
     </html>
    `)
}) 
app.listen(3000, function () {
  console.log("express app is running")
})
