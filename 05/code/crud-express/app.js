/**
 * app.js 入口模块
 * 职责：
 *   启动服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单post请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */

var express = require("express")
var fs = require("fs")
var router = require("./router")
var bodyParser = require("body-parser")

var app = express()

app.use("/node_modules/", express.static("./node_modules/"))
app.use("/public/", express.static("./public/"))
//配置模板引擎和body-parser一定要在app.use(rout)挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine("html", require("express-art-template"))

//把路由容器挂载到app服务
app.use(router)

app.listen(3000, () => {
  console.log(`Server started on port ：3000`)
})
