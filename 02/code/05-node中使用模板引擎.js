//art-template
// 再github中查找他的代码
//再进入官网  npm install art-template  ,会在当前的目录下创建一个node_modules文件夹 把包安装进去，不要改node_modules!

//在Node中使用art-template模板
//最早诞生于服务器领域，后面踩到前端
//var template = require('art-template')
//1安装 2，加载art-template 3 查文档 api

var template = require("art-template")
var fs = require("fs")

fs.readFile("./06-在浏览器中使用art-template.html", function (err, data) {
  if (err) {
    console.log("读取文件失败")
  }
  //data是二进制，render需要字符串
  var a = template.render(data.toString(), {
    name: 'nick',
    age: 18,
    province: '四川',
    hobo:[
      '唱','条'
    ]
  })
console.log(a)

})

