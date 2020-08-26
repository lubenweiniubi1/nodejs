var fs = require("fs")
var path = require("path")
// 以前认知 ./a.txt 相对于当前文件路径
// 但是 实际上 ./a.txt 相对于执行node命令所处的终端路径
fs.readFile(path.join(__dirname, "./a.txt"), "utf-8", function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})
