//走马观花用一下api，了解一下
//获取机器信息的
var os = require('os')
//操作路径的
var path = require('path')

//获取当前机器cpu信息
console.log(os.cpus())
//内存大小获取
console.log(os.totalmem())
//获取拓展名
console.log(path.extname('./01-fileWR.js'))