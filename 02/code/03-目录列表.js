var http = require("http")
var fs = require("fs")

var server = http.createServer()

var wwwDir = "D:/Movie/www"

server.on("request", function (req, res) {
  var url = req.url
  var filePath = "/index.html"
  var content = ""
  fs.readFile("./template.html", function (err, data) {
    if (err) {
      return res.end("404 Not Found")
    }
    //1,如何得到wwwDir目录列表中的文件名
    // fs.readdir
    //2，数据替换到html中
    //  2.1在template.html中在需要替换的位置留一个特殊标记
    //  2.2 再replace他

    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end("找不到www")
      }
      console.log(files)

      files.forEach(function (item) {
        content += `
          <tr>
        <td data-value="a.txt"><a class="icon file" draggable="true" href="/D:/movie/www/a.txt">${item}</a></td>
        <td class="detailsColumn" data-value="0">0 B</td>
        <td class="detailsColumn" data-value="1591972649">2020/6/12 下午10:37:29</td>
      </tr>
          `
      })
      console.log(content)

      data = data.toString()
      console.log(data)

      data = data.replace("^_^", content)
      res.end(data) // D:/movie/www/url
    })
  })
})

server.listen(3000, function () {
  console.log("running")
})
