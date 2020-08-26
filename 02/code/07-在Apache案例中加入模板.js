var http = require("http")
var fs = require("fs")
var template = require("art-template")
var server = http.createServer()

var wwwDir = "D:/Movie/www"

server.on("request", function (req, res) {
  var url = req.url
  var filePath = "/index.html"
  var content = ""
  fs.readFile("./template-07.html", function (err, data) {
    if (err) {
      return res.end("404 Not Found")
    }
   

    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end("找不到www")
      }
      //替换data中的模板字符串，数据就是files，去templateHtml中编写模板语法
      var htmlStr = template.render(data.toString(), {
        title: '你好是 是的的的 ',
        files:files
      })

      res.end(htmlStr) // D:/movie/www/url
    })
  })
})

server.listen(3000, function () {
  console.log("running")
})
