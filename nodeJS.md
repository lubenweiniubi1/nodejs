#  Node.js

### 1.1.为什么要学习Node.js

- 企业需求
  + 具有服务端开发经验更好
  + front-end
  + back-end 
  + 全栈开发工程师
    * 全干
  + 基本的网站开发功能
    * 服务端
    * 前端
    * 运维部署
  + 多人社区案例
### 1.2.Node.js 是什么
- Node.js is a JavaScript runtime built on the V8 JavaScript engine.
   +  Node.js 不是一门语言
   + Node.js不是库、不是框架
   + Node.js是一个JavaScript运行时环境
   + 简单来讲Node.js可以解析和执行JS 
   + 以前只有浏览器可以解析执行JavaScript
   + 也就是说JS可以完全脱离浏览器执行，一切归功于node.js
- 浏览器中的JavaScript
   + EcmaScript 
     - 基本语法
     - if
     - var
     - function
     - Object
     - array
   + BOM
   + DOM
- Node.js中的 JavaScript
  + **没有BOM、DOM**

  + EcmaScript

  + 在Node这个Javascript执行环境中位JavaScript提供了一些服务器级别的api
    + 例如文件读写
    + 网络服务的构建
    + 网络通信
    + http 服务器
    + 等处理
+ 构建与Chrome的V8引擎之上

    + **JavaScript引擎**是一个专门处理[JavaScript](https://baike.baidu.com/item/JavaScript)脚本的[虚拟机](https://baike.baidu.com/item/虚拟机/104440)，一般会附带在[网页浏览器](https://baike.baidu.com/item/网页浏览器/8309940)之中
    + 代码只是具有特定格式的字符串而已
    + 引擎可以认识他，引擎可以帮你去解析和执行（代码是汽油，引擎是发动机）
    + V8引擎 是目前公认的解析执行JavaScript代码最快的
    + Node.js 作者把V8引擎移植出来，开发了一个独立的JS运行时环境
- Node.js uses an event-driven,non-blocking I/O model that makes it lightweight and efficient.
   + event-driven 事件驱动
   + non-blocking I/O 非阻塞IO模型 （异步）
   + 轻量和高效
   + 慢慢就学会了 

+ Node.js packgae ecosystem,npm，是世界最大开源库生态系统
  + 绝大数JS相关的包都存放在npm上，这样就可以快捷下载



### 1.3 Node.js 能做什么

+ Web 服务器后台
+ 命令行工具
  + npm(node)
  + git(c语言)
  + hexo（node）
  + 。。。
+ 对前端开发工程师来讲，接触node最多的是它的命令行工具
  + 自己写的很少，主要使用别人第三方的
  + webpack
  + gulp
  + npm

### 1.4 预备知识

+ HTML
+ CSS
+ JavaScript
+ 简单的命令行操作
+ 具有服务端开发经验更佳

### 1.5.一些资源

+ 深入浅出Node.js
  + 朴灵 阿里的
  + 偏理论，几乎没有实战行内容
  + 理解原理底层有帮助
  + 结合课程的学习去看
+ Node.js权威指南
  + api讲解
  + 也没有业务，没有实战
+ JavaScript 标准参考教程（alpha）： http://javascript.ruanyifeng.com
+ 官方文档 https://nodejs.org/en/docs/
+ node社区 ：http://cnodejs.org
+ node 入门 http://nodebeginner.org/index-zh-cn.html
+ CNODE新手入门 cnode社区中
+ 《javascript高级编程》第三版
+ 书本可以更好的系统的整理学过的内容，了解细节
+ 《js语言精粹》

### 1.6.这门课程你能学到啥

+ B/S编程模型
+ 模块化编程
  + RequireJS
  + SeaJS
  + `@import('文件路径')` css中
  + 以前认知的JS智能通过script标签加载
  + 在Node中可以像`@import()`一样加载JS脚本文件
+ Node常用API
+ 异步编程
  + 回调函数
+ Express 开发框架
+ Ecmascript 6
  + 穿插讲解
  + 语法糖
+ 帮助学习前端高级知识
  + React
  + vue.js等等

## 2.起步

###  2.1.安装node环境

+ 安装就不计了



### 2.2 Hello World

#### 2.2.1 解析执行JavaScript

1.创建编写JavaScript脚本文件

2.打开终端，定位到脚本文件所载目录

3.输入`node yourfilename` 执行对应的文件

注意： 文件名不要使用 `node.js`命名！ 不要使用中文 ，符合规范。

+ 解析执行JavaScript
+ 读写文件
+ http

#### 2.2.2文件读写

文件读取：

```javascript
//浏览器的JS是没有文件操作的能力
//但是Node中的JS有

//fs 是file-system 的简写，是文件系统的意思
//在Node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API
//例如fs.readFile就是用来读取文件的

//1. 使用require 方法加载fs核心模块
var fs = require("fs")


//2.读取文件
// 第一个参数位读取的文件路径 ，第二个位回调参数
// error 如果失败就是错误对象/成功 null   data 相反，如果成功就是数据/相反就是undefined

fs.readFile('./nodeJS.md',function(error,data){
   //文件中存储的都是二进制数据 0 1，二进制转为16进制了
   // 可以通过toString方法转为人类可懂的字符
   //判断error是否位null来确认
   if(error){
       console.log('读取文件失败');
   }else{
    console.log(data.toString());
   }
})
```

文件写：

```javascript
var fs = require('fs')


//第一个参数 文件路径 第二个参数 文件内容 第三个参数 回调函数
//error 写入成功 就是null 不然就是错误对象
fs.writeFile('./data/你好.md','你好 煞笔',function(error){
    
    if(error){
        console.log('读取文件失败');
    }else{
     console.log('成功');
    }
})
```

#### 2.2.3 http

最简单的http服务：

```javascript
//接下来干一件使用Node很有成就感的一件事儿
// 使用Node轻松构建一个Web服务器
//在Node中专门提供了一个核心模块：http
//http这个模块的职责就是用来写服务器的

//1. 加载http核心模块
var http = require("http")

//2.使用http.createServer()方法创建一个Web服务器
//返回一个Server实例
var server = http.createServer()

//3.提供服务：对数据的服务
//  发请求
//  接受请求
// 处理请求
// 给个反馈（发送响应）
//注册request请求事件
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数回调处理函数

server.on("request", function () {
  console.log("收到到客户端的请求了")
})

//4.绑定端口号，启动服务器
server.listen(3000, function () {
  console.log("服务器启动成功了，可以通过127.0.0.1：3000 来进行访问了")
})

```

![image-20200609222543218](C:\Users\卢本伟牛批\AppData\Roaming\Typora\typora-user-images\image-20200609222543218.png)

### 2.3 REPL

常用api

+ read 读取
+ eval执行
+ print输出
+ loop循环

在终端中输入`node`命令直接桥回城：就进入了node控制台，就是那种乌漆嘛黑的。作用，测试api的

## 3.Node 中的js

+ EcmaScript
  + no bom dom
+ 核心模块
+ 第三方模块
+ 用户自定义模块

#### 3.1 核心模块

Node 为Javascript提供了很多服务器级别的API，这些绝大多数呗包装到一个具名的核心模块中了。

例如文件操作的`fs`核心模块，http服务构建的`http`模块，`path`路径操作模块，`os` 操作系统信息模块。。。



以后只要是一个核心模块，想要使用就必须先使用`require`加载：

```javas
var fs = require('fs')
var http = require('http')
```

#### 3.3 用户自定义模块

+ require
+ exports

## 4.Web服务器开发

### 4.1.ip地址和端口号

+ ip地址用来定位计算机
+ 端口号用来定位具体的应用程序
+ 一切需要联网通信的软件都会占用一个端口号
+ 端口号范围 0 - 65536之间
+ 计算机中有一些默认端口号，最好不要占用
  + 例如http服务的80
+ 我们在开发中使用一些简单好记的就可以了，例如300，5000
+ 可以同时开启多个服务，一定要确定端口号不一致，不能占用

###  4.2. Content-Type

+ http://tool.oschina.net

### 4.3 请求对象Request

### 4.4 响应对象Response

### 4.5 在Node中使用模板引擎

### 4.6 统一处理静态资源

### 4.7 服务器渲染

+ 以前浏览器服务端访问的渲染情况

![image-20200615192927919](C:\Users\卢本伟牛批\AppData\Roaming\Typora\typora-user-images\image-20200615192927919.png)

+ 服务端渲染

  + 服务端压力变大

  + 显示页面慢

  + 右键页面源代码，如果能找到页面的所有内容，就是说明服务端渲染，看页面刷不刷新

  + 如果没有找到一部分内容，说明是后面动态追加的

  + 为什么服务端渲染和客户端异步渲染会并存呢

    + 以内异步渲染不利于seo 搜索引擎优化，爬虫抓不到
    + 服务端渲染可以被爬虫抓取到的，客户端异步渲染很难被爬虫抓取到
    + 所以你会发现真正的网站既不是纯异步或者纯服务端渲染的
    + 而是两者结合的
    + 例如京东的商品列表就是采用服务端渲染，目的为了seo搜索引擎优化
    + 而他的商品评论列表为了客户体验，而且不需要seo优化 ，所以采用客户端渲染

    

![image-20200615193236303](C:\Users\卢本伟牛批\AppData\Roaming\Typora\typora-user-images\image-20200615193236303.png)





### 4.8 代码风格

https://standardjs.com/rules-zhcn.html 多阅读几次，代码写多了就好了

## 5.留言本

***

## 6.Node中的模块系统

使用Node编写应用程序主要就是使用：

+ EcmaScript语言
+ 核心模块
  + 文件的fs
  + http服务的http
  + url路径操作模块
  + path路径处理模块
  + os操作系统信息
+ 第三方模块
  + art-template
  + 必须使用npm下载可以使用
+ 自己写的模块

### 6.1.什么是模块化

+ 有文件作用域
+ 有通信规则
  + 加载require
  + 导出

## 6.2. CommonJS模块规范

在Node中的JavaScript还有一个很重要的概念：模块系统。

+ 模块作用域
+ 使用require方法用来加载模块
+ 使用exports接口对象用来导出模块中的成员

#### 6.2.1加载`require`

语法：

```javascript
var 自定义变量名 = require('require')
```

两个作用：

+ 执行被加载模块中的代码
+ 得到被加载模块中的`exports`导出接口对象

#### 6.2.2 导出`exports`

+ Node中是模块作用域，默认文件中所有成员只在当前文件模块中有效
+ 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员挂载到exports接口对象中就可以了

导出多个成员（必须在对象中）：

```javascript
exports.a = 123
exports.b = 'hello'
exports.c = function(){
    console.log('c')
}

```

导出单个成员（拿到的就是函数或者字符串）：

```javascript
module.exports = 'hello'

module.exports = function(){ //后面的会覆盖前面的
    console.log('c')
}
```

导出多个成员

```javascript
module.exports = {
    add: function(){
        
    },
    str: 'hello'
}
```

注： 两个一起用时，module.exports 会是最后返回的结果

#### 6.2.3原理

exports是 `module.exports`的一个引用

```javascript
console.log(exports === module.exports) // => true

exports.foo = 'a'

//等价于
module.exports.foo = 'a'
```

#### 6.2.4 exports 和module.exports的区别

+  	每个模块都有一个module对象
+ modulte对象中有一个exports对象
+ 我们可以把需要导出的成员都挂在到module.exports接口对象中
+ Node为了方便你，提供了个成员exports
+ `exports === module.exports` 结果为 `true`
+ 每个模块最终向外`return `的是`module.exports`
+ 如果对exports赋值会断开引用关系
+ 但是`exports = module.exports`可以重新简历引用

#### 6.2.5require方法加载规则

> [深入浅出Node.js 模块系统][]
>
> 如果想要了解更多底层细节，可以自行参考：嫖零的《深入浅出Node.js》的模块系统章节
>
> [深入浅出Node.js 模块系统]:https://www.infoq.cn/article/nodejs-module-mechanism
>
> 

- 核心模块
  + 模块名
- 第三方模块
  + 模块名
- 用户自己写的
  + 路径



- 优先从缓存加载
- 判断模块标识
  + 核心模块
  + 第三方模块
  + 自己写的模块

```
blog 
   a
     node_modules
   b
     main.js //里面有个require
```

这里是加载不到兄弟目录的node_modules的

[https://www.infoq.cn/article/nodejs-module-mechanism]: 

### 6.3 npm

+ node package namager

#### 6.3.1 npm 网站

> npmjs.com

#### 6.3.2 npm 命令行工具

npm只要你安装了node，就已经安装了npm

npm也有版本这个概念。

可以通过在命令行中输入：

```shell
npm --version
```

升级 npm：

```shell
npm install  --global npm
```

#### 6.3.3常用命令

+ npm init
  + npm init -y 可以跳过向导
+ npm install 
  + 一次性把package.json中的依赖全下载安装下来
  + npm i
+ npm install 报名
  + 只下载
+ npm install --save 包名
  + 下载并且保存依赖 （package.json中的dependencies）
  + npm -S 报名    简写
+ npm uninstall 报名
  + 只删除，如果有依赖项会依然保存
+ npm uninstall 报名 --save
  + 删除的同时也会把依赖删除
+ npm help
  + 查看使用帮助
+ npm 命令 --help
  + 查看指定命令的使用帮助

#### 6.3.4解决npm被墙问题

npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，需要解决一个问题。

https://developer.aliyun.com/mirror/NPM?from=tnpm 淘宝开发团队把npm在国内做了个备份。

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

以后用`cnpm`就行了

如果不想安装`cnpm` 又想用淘宝服务器下载：

```shell
npm install jquery --registry=https://registry.npm.taobao.org
```

但是手动加参数很麻烦，所以我们可以把这个选项加到配置中

```shell
npm config set registry=https://registry.npm.taobao.org

#查看npm配置信息
npm config list
```

只要经过上米娜的配置，则你以后的所有`npm install ` 都会默认通过淘宝服务器下载

### 6.4 package.json

建一个每个项目都要有一个`package.json` 文件（包描述文件，就想产品的说明书一样）

对我们来说最有用的是`dependencies` 保存第三方包的信息,如果你的`node_modules` 删除了也不用担心，我们只需要：`npm install`就会自动把`package.json`中所有依赖项下载回来。

+ 建议在执行`npm install  xxx`时 加上`--save`参数
+ 这个文件可以通过`npm init` 自动初始化出来

#### 6.4.1 package.json和package-lock.json 的区别

npm 5以前不会有`package-lock.json`文件的，当你安装包的时候，新版的npm还会自动生成文件：package-lock.json

+ npm 5以后的版本不需要加 `--save` 参数，它会自动保存依赖信息
+  当你安装包的时候，会自动创建或者是更新`package-lock.json`这个文件
+ `package-lock.json`这个文件会保存`node_modules` 中所有包的全部信息(版本、下载地址)
  + 保存了依赖树
  + 重新`npm install` 的时候速度会提升
+ 从文件来看，有一个`lock` ，称之为锁
  + 用来锁定版本，这个`lock` 
  + 如果项目以来了`1.1.1` 这个版本
  + 如果重新install 其实会下载最新版本 ，而不是1.1.1
  + 我们的目的是可以锁住1.1.1这个版本
  + 所以`package-lock.json`这个文件另一个作用就是锁定版本号，防止自动升级新版
    + 比如：package.json中的art-template 版本号为`^4.3.1` ,表示只要比这个大的版本都可以安装，去掉`package-lock.json`后安装的版本是`4.3.2` ,新建的`package-lock.json`记录了当前art-template的真实版本号

## 7.Express

原生的http 在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码更高度同意。

 在Node中，有很多Web开发框架，我们这里以学习`express` 为主。

+ http://expressjs.com

### 7.1 起步

#### 7.1.1 安装

```shell
npm install --save express
```

#### 7.1.2 hello world:

```javascript
var app = express()

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

```

#### 7.1.3 基本路由

路由器router

+ 请求方法
+ 请求路径
+ 请求处理函数

get:

```javascript
//当你以GET方法请求/的时候，执行对应的处理函数
app.get('/',function(req,res){
    res.send("hello world")
})
```

post:

```javascript
//当你以POST方法请求/的时候,执行对应的处理函数
app.post('/',function(req,res){
    res.send("hello world")
})
```



#### 7.1.4 静态服务

```javascript
//当以 /public/开头的时候去 ./public/目录中查找对应的资源
//这种方式更容易辨识 推荐
app.use('/public/',express.static('public'))

//当省略第一个参数的时候，可以通过 省略 /public 的方式来访问
app.use(express.static('public'))
app.use( express.static('files'))

//必须以 /abc/d 开头，起了别名
app.use('/abc/d',express.static('public'))
app.use('/static',express.static(path.join(__dirname,'public')))
```

### 7.2 在Express中配置使用 `art-template` 模板引擎

+ [art-template官方文档](https://aui.github.io/art-template/express/)

  ```javascript
  //配置使用art-template
  //第一个参数表示，当渲染以.art结尾的文件的时候，使用art-template模板引擎
  // express-art-template 是专门用来在Express中把art-template 整合到 Express中的
  //虽然外面这里不需要加载art-template  但是也必须安装
  //原因在于 express-art-template 依赖了 art——template
  // app.engine("art", require("express-art-template"))
  app.engine("html", require("express-art-template"))
  
  //Express 为Response 对象提供了一个方法：render
  //render方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
  // res.render('html模板名称',{模板数据})
  // 第一个参数不能写路径，默认去项目中的views目录查找该模板文件
  //也就是说Express有约定，开发人员把所有的视图文件都放在views目录中
  //也可以html结尾，但是前面的引擎必须改
  
  //如果想要修改默认的views目录，则可以
  // app.set('views',render函数的默认路径)
  
  //在Express中获取表单GET请求 
  //req.query
  //Express 内置了一个api，可以通过此获取
  ```

###  7.3 在Express中获取表单post请求体数据

  在Express中没有内置获取表单post请求体的api，这里我们需要使用第三方包:`body-parser`



安装:

```shell
 npm install body-parser
```

配置：

```javascript
var express = require('express')
// 0.引包
var bodyParser = require('body-parser')

var app = express()
//配置body-parser
//只要加入这个配置，则在req请求对象上会多出来一个属性：body
//也就是说你就可以直接通过req.body来获取表单POST请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  //可以通过req.body来获取POST请求数据
  res.end(JSON.stringify(req.body, null, 2))
})
```

### 7.4 CRUD 案例

#### 7.4.1qi起步

+ 初始化
+ 安装依赖
+ 模板处理

#### 7.4.2路由设计

| 请求方法 | 请求路径         | get参数 | post 参数                  | 备注             |
| -------- | ---------------- | ------- | -------------------------- | ---------------- |
| GET      | /students        |         |                            | 渲染首页         |
| GET      | /students/new    |         |                            | 渲染添加学生页面 |
| POST     | /students/new    |         | name,age,gender,hobbies    | 处理添加学生请求 |
| GET      | /students/edit   | id      |                            | 渲染编辑页面     |
| POST     | /students/edit   |         | name,age,gender,hobbies,id | 处理编辑学生请求 |
| GET      | /students/delete | id      |                            | 处理删除请求     |
|          |                  |         |                            |                  |

#### 7.4.3提取路由模块

router.js:

``` javascript
/**
 * 原则：模块职责应该清晰且单一
 * 划分模块的目的就是为了增强项目代码的可维护性，提升开发效率
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的处理函数    
 */

//Express提供了一个更好的方式
var express = require("express")
var fs = require("fs")

//1,创建一个路由容器
var router = express.Router()

//2.把路由都挂载到这个路由容器router中
router.get("/students", (req, res) => {
  //readFile的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照utf8编码，转成我们能认识的字符
  //除了这样之外 也可通过 toString ()
  fs.readFile("./db.json", "utf8", function (err, data) {
    if (err) {
      return res.status(500).send("server error")
    }
    //这个是string,需要通过转成对象
    console.log(JSON.parse(data))
    res.render("index.html", {
      students: JSON.parse(data).students,
    })
  })
})
router.get("/students/new", function (req, res) {
  res.render('new.html')
})
router.get("/students/edit", function (req, res) {
  return
})
router.post("/students/edit", function (req, res) {
  return
})
router.get("/students/delete", function (req, res) {
  return
})
//3.把router 导出
module.exports = router
```

app.js:

```javascript
var router = require("./router")
//挂载路由
app.use(router)

```

#### 7.4.4 设计操作数据的API文件模块

```javascript
/**
 * student.js
 * 读取操作文件模块
 * 职责： 操作文件中的数据，只处理数据，不关心业务
 */
var fs = require('fs')

/**
 * 获取所有学生列表
 */
exports.find = function(){

}
/**
 * 添加保存学生
 */
exports.save = function(){
    
}
/**
 * 更新学生
 */
exports.update = function(){
    
}
/**
 * 删除学生
 */
exports.delete = function(){
    
}
```

#### 7.4.5自己写的步骤

+ 处理模板
+ 配置开放静态资源
+ 配置模板引擎
+ 简单路由：/students渲染静态页出来
+ 路由设计
+ 提取路由模块
+ 由于接下来一些列的业务操作都需要处理文件数据，所以需要封装student.js
+ 先写好student.js文件结构
  + 查询所有学生的find
  + save
  + delete
  + updateById
  + findById
+ 实现具体功能
  + 通过路由接受请求
  + 接受请求中的数据
    + req.query
    + req.body
  + 调用数据操作api处理数据
  + 根据操作结果给客户端发送响应

### 7.5 CRUD 案例

#### 7.5.1 模块化思想

模块如何划分：

+ 模块职责要单一
+ Vue
+ angular
+ React
+ 也非常有利于学习前端三大框架

### 7.6 在Express配置使用`express-session`插件

> https://www.npmjs.com/package/express-session

安装：

```shell
npm install express-session
```

配置：

```javascript
//在Express这个框架中，默认不支持Session和Cookie
//但是我们可以使用第三方中间件：express-session来解决
//1.npm install express-session
//2.配置(一定要在路由之前)
//3。使用 
//    当把这个插件配置好之后，我们就可以通过req.session来访问和设置Session成员了
//    添加Session数据 req.session.foo = 'bar' 
//     访问Session数据 req.session.foo
app.use(session({
  //自定义的字符串，类似于加密数据后拼一个 itcast，配置加密字符串，它会在原有加密基础上 和这个字符串拼起来去加密
  //为了增加安全性，防止客户端恶意伪造session
  secret: 'itcast',
  resave: false,
  saveUninitialized: true//无论你是否使用session 我都默认直接给你分配一把钥匙
}))

```

使用：

```javascript
//设置 
req.session.user = curUser
//获取session数据
req.session.user
```

提示：默认Session数据是内存存储的，服务器重启session就没了，真正的成产环境会把Session进行持久化存储。

## 8.MongoDB

### 8.1 关系型数据库和非关系型数据库

表就是关系

表与表之间存在关系。

+ 所有关系型数据库都需要通过sql语言操作
+ 所有的关系型数据库在操作之前都需要设计表结构
+ 表还支持约束
  + 唯一的
  + 主键
  + 默认值
  + 非空
+ 非关系型数据库非常灵活
+ 有的非关系型数据库就是key-value 对儿
+ 但是Mongodb是长得最像关系型数据库的非关系型数据库
  + 数据库
  + 数据表=》集合
  + 表记录=》 文档对象
+ mongodb数据库不需要设计表结构
+ 可以任意往里面存数据
+ 没有结构性

### 8.2 安装

官网去安装，配置环境变量，`mongod --version`判断是否安装成功

### 8.3 启动和关闭数据库

启动：

```shell
#mongodb 默认使用执行mongod命令所处盘符根目录下的/data/db作为自己的数据存储目录
#所以在第一次执行该命令之前手动新建一个/data/
mongod
```

必须要有/data/db，不然会报错，启动失败

想要修改默认的数据存储目录，可以：

```shell
mongod --dbpath = 数据存储目录路径 
```

停止：

在控制台`ctrl+c`

### 8.4 连接和退出数据库

连接：

```shell
#该命令默认连接本机的MongoDB服务
mongo
```

退出：

```shell
#在连接状态输入exit 退出 连接
exit
```

### 8.5基本命令

+ `show dbs` 
  + 查看显示所有数据库
+ `db`
  + 查看当前连接或者操作的数据库 
+ `use 数据库名称`
  + 切换到指定的数据库，如果没有会新建，
+ 插入数据

### 8.6在node中如何操作MongoDB数据库

#### 8.6.1使用官方的`mongodb`包来操作

> https://github.com/mongodb/node-mongodb-native（比较麻烦，一般不用）

#### 8.6.2 使用第三方mongoose来操作MongoDB数据库

第三包:`mongoose`基于MongoDB官方的`mongodb`包再一次做了封装。

> https://mongoosejs.com/

```javascript
const mongoose = require("mongoose")

//连接mongodb数据库
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//创建一个模型
//就是在设计数据库
//MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
//mongoose这个包就可以让你设计编写过程变得非常简单
const Cat = mongoose.model("Cat", { name: String })

//实例化一个cat
const kitty = new Cat({ name: "Zildjian" })
//持久化保存kitty实例
kitty.save().then(() => console.log("meow"))

```

#### 8.6.3 mongoose官方指南

+ 设计schema 发布modal

```javascript
var mongoose = require("mongoose")
var Schema = mongoose.Schema

//1,连接数据库
//指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect("mongodb://localhost/itcast")

//2,设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//值 每个文档都要有下面的结构，属性类型也要一致
// 约束：保证数据完整性，不要有脏数据
var userSchema = new Schema({
  username: {
    type: String,
    required: true, //必须有
  },
  password: {
    type: String,
    required: true, //必须有
  },
  email: {
    type: String,
  },
})

//3.将文档结构发布为模型
//  mogoose.model 方法就是用来将一个架构发布为modal
//    第一参数：传入一个大写字母单数字符串来表示你数据库名称
//              mongoose会自动将大写名词字符串生成  小写复数 的集合名称 
//                例如这里的User最终会编程users集合名称 
//    第二个参数 ：架构schema
//      返回： 模型构造函数
var User = mongoose.model("User", userSchema)


//4. 当我们有了模型构造函数之后，就可以使用这个构造函数对users集合中的数据为所欲为了

```

+ 增加数据

```javascript
var admin = new User({
  username: "admin",
  password: "123456",
  email: "admin@admin.com",
})

admin.save(function (err, ret) {
  if (err) {
    console.log("保存失败")
  } else {
    console.log(ret)
  }
})

```

+ 查询所有/按条件查询

```javascript
/**查询 */
User.find((err, res) => {
  console.log(res)
})
User.find({ username: "zs" }, (err, res) => {
  console.log(res)
})//不管结果如何都会放在一个数组中
//findOne 不一样
```

+ 删除数据

```javascript
/**删除 */
User.remove(
  {
    username: "zs",
  },
  (err) => {
    if (err) {
      console.log("删除失败")
    }
    else{
      console.log('删除陈工');
      
    }
  }
)
```

+ 更新

```js
User.findByIdAndUpdate(
  "5f048b04948f241b549bd760",
  {
    password: "77777",
  },
  (err) => {
    if (err) {
      console.log(err)
    }
  }
)

User.update(
  { username: "admin" },
  {
    password: "sa111bi",
  },
   
)
//必须设置回调，不然不更新
```

+ mongoose 支持PromiseAPI

```javascript
User.findOne({
    username: 'admin'
}).then(function(user){
    if(user){
        //用户已存在
    }else {
        //用户不存在
    }
})
```



#### 8.6.4 node操作mysql

安装：

```javascript
npm install --save mysql
```

## 9.异步编程

### 9.1 回调函数



### 9.2 Promise

callback hell 回调地狱：

![image-20200709210107637](C:\Users\卢本伟牛批\AppData\Roaming\Typora\typora-user-images\image-20200709210107637.png)

无法保证顺序的代码：

```javascript
var fs = require("fs")

fs.readFile("./data/a.txt", "utf-8", function (err, da) {
  if (err) {
    /*
         抛出异常
           1，阻止程序的执行
           2，把错误消息打印到控制台
        */
    throw err
  }
  console.log(da)
})
fs.readFile("./data/b.txt", "utf-8", function (err, da) {
  if (err) {
    throw err
  }
  console.log(da)
})
fs.readFile("./data/c.txt", "utf-8", function (err, da) {
  if (err) {
    throw err
  }
  console.log(da)
})
```

通过回调嵌套的方式来保证顺序：

 ```javascript
fs.readFile("./data/a.txt", "utf-8", function (err, da) {
  if (err) {
    /*
         抛出异常
           1，阻止程序的执行
           2，把错误消息打印到控制台
        */
    throw err
  }
  console.log(da)
  fs.readFile("./data/b.txt", "utf-8", function (err, da) {
    if (err) {
      throw err
    }
    console.log(da)
    fs.readFile("./data/c.txt", "utf-8", function (err, da) {
      if (err) {
        throw err
      }
      console.log(da)
    })
  })
})
 ```

>如果在写业务代码的时候，有好几个接口需要你使用，然鹅接口A需要接口B的回调res参数去请求数据呢？ 所以就会写成三四个回调函数嵌套。这样写代码，虽然看着挺好的，但是少的还好，如果7、8个类似场景就爆炸了！

>首先说下缺点代码耦合，
>
>1，一旦修改，原地爆炸。
>
>2，无法使用try catch，就无法排错，也是原地爆炸。



为了解决以上编码方式带来的问题（回调地狱嵌套），所以再EcmaScript 6中新增了一个API: `Promise` 。 

+ Promise的英文就是 承诺、保证的意思
+ Pending的状态只能改变一次，成功了就不可能再失败了，不能反复横跳

```mermaid
graph LR
     subgraph  Promise容器,容器中存放了一个异步任务
     a2[Pending即将开始的,正在进行的任务]-->a3[Resolved做到了承诺,已经解决,已经做到]
     a2--> a4[Rejected失败了]
     a5[Promise 本身不是异步,但是内部往往都是封装一个异步]
     end
```

Promise基本语法:

```javascript
var fs = require("fs")
//在EcmaScript 6中新增了一个API Promise
//Promise 是一个构造函数
console.log(1)

//创建Promise容器
//1.给别人一个承诺 I promise you ，为决定的 是一个义务
//   Promise容器一旦创建，就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {
  console.log(2) //这里不是异步的，只有readFile是异步的

  fs.readFile("./data/a.txt", "utf8", function (err, data) {
    if (err) {
      //失败了，承诺容器中的任务失败了
      //   console.log(err)
      //把容器的Pending状态改为Rejected
      reject(err)
    } else {
      //console.log(3)
      //任务成功了
      //console.log(data)
      //把容器的Pending状态改为成功 Resolved
      //也就是说这里调用的resolve方法实际上就是then方法传递的那个function
      resolve(data)
    }
  })
})
// console.log(4)

//p1 就是那个承诺，
// 当p1成功了，然后 （then) 做指定的操作
//then 方法接收的function就是容器中的resolve函数！,第二个方法就是reject函数
p1.then(
  function (data) {
    console.log(data)
  },
  function (err) {
    console.log("读取失败", err)
  }
)

```

解决回调地狱：

```javascript
var fs = require("fs")
//在EcmaScript 6中新增了一个API Promise
//Promise 是一个构造函数
console.log(1)

//创建Promise容器
//1.给别人一个承诺 I promise you ，为决定的 是一个义务
//   Promise容器一旦创建，就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {
  console.log(2) //这里不是异步的，只有readFile是异步的

  fs.readFile("./data/a.txt", "utf8", function (err, data) {
    if (err) {
      //失败了，承诺容器中的任务失败了
      //   console.log(err)
      //把容器的Pending状态改为Rejected
      reject(err)
    } else {
      console.log(111)

      //console.log(3)
      //任务成功了
      //console.log(data)
      //把容器的Pending状态改为成功 Resolved
      //也就是说这里调用的resolve方法实际上就是then方法传递的那个function
      resolve(data)
    }
  })
})
// console.log(4)

var p2 = new Promise(function (resolve, reject) {
  fs.readFile("./data/b.txt", "utf8", function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
var p3 = new Promise(function (resolve, reject) {
  fs.readFile("./data/c.txt", "utf8", function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

//p1 就是那个承诺，
// 当p1成功了，然后 （then) 做指定的操作
//then 方法接收的function就是容器中的resolve函数！,第二个方法就是reject函数
p1.then(
  function (data) {
    console.log(data)
    //当前函数中return的结果就是i下一个then中function收到的参数
    //真正有用的是return 一个新的 Promise对象
    //当return 一个Promise对象的时候，后续的then中的方法的第一个参数会作为p2的resolve，第二个会作为reject
    return p2
  },
  function (err) {
    console.log("读取失败", err)
  }
)
  .then((data) => {
    console.log(data)
    return p3
  })
  .then(function (data) {
    console.log(data)
  })

```

封装Promise版本的`readFile`:

```javascript
function pReadFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

pReadFile("./data/a.txt")
  .then(function (data) {
    console.log(data)
    return pReadFile("./data/b.txt")
  })
  .then(function (data) {
    console.log(data)
    return pReadFile("./data/c.txt")
  })
  .then(function (data) {
    console.log(data)
  })

```

推荐书籍：

> https://es6.ruanyifeng.com/
>
> 《JavaScript 高级程序设计》
>
> 《深入理解ES6》

## 10.中间件



## path路径操作模块

path.basename(path[,ext])：

```shell
/*
 获取一个路径当中的文件名
*/
path.basename('c:/a/b/c/d/index.jssssss')
 //输出'index.jssssss'
path.basename('c:/a/b/c/d/index.js','js')//第二个参数为去掉后缀名
//输出 'index'
```

path.dirname(path):

```shell
/*
 获取一个路径当中的目录
*/
> path.dirname('c:/a/b/c/d/index.js')
'c:/a/b/c/d'
```

path.isAbsolute(path):

```shell
/*
 判断是不是绝对路径
*/
> path.isAbsolute('c:/a/b/c')
true
> path.isAbsolute('a/html')
false
> path.isAbsolute('/a/html')
true
```

path.parse(path)：

```shell
/*
  上面几个api的总和，将一个路径解析成一个对象，里面的属性很重要
*/
> path.parse('/a/b/c/d/index.js')
{
  root: '/',
  dir: '/a/b/c/d',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
```

path.join([...paths])：

```shell
/*
  用平台专用的分隔符来连接几路径片段，并标准化
*/
> path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
'/foo/bar/baz/asdf'
> path.join('/foo', 'bar', 'baz/asdf', 'quux', '')
'/foo/bar/baz/asdf/quux'
>  
```

## Node中的其他成员

在每个模块中，除了`require`、`exports` 等模块相关的API外，还有两个特殊的成员：

+ `__dirname` 可以用来获取当前文件模块所属目录的绝对路径
+ `__filename`  可以用来获取当前文件的绝对路径

```javascript
console.log(__dirname)
console.log(__filename)

//C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\06\code
//C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\06\code\01-dirname和filename.js
```

在文件操作中使用相对路径是不可靠的，因为再Node中文件操作的路径被设计为相对于执行node命令所处的路径。

**文件路径问题**：

+ 在 foo文件夹下有一个a.txt 和 index.js

```javascript
//index.js代码

// 以前认知 ./a.txt 相对于当前文件路径
// 但是 实际上 ./a.txt 相对于执行node命令所处的终端路径
fs.readFile("./a.txt", "utf-8", function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})

```

执行结果：

```shell
PS C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\06\code\foo> node .\index.js
hello  宰总
```

cd到目录 执行foo文件夹下面的index：

```shell
PS C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\06\code\foo> cd ..
PS C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\06\code> node .\foo\index.js
C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\06\code\foo\index.js:8
    throw err
    ^

[Error: ENOENT: no such file or directory, open 'C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\06\code\a.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\卢本伟牛批\\Desktop\\Technology stack\\nodejs\\06\\code\\a.txt'
}
```

所以为了解决这个问题，很简单，只需要把相对路径变为绝对路径就行了。

我们可以使用`__dirname`或者`__filename`来帮我们解决这个问题了。

在拼接路径中，为了避免手动拼接带来的低级错误，所以推荐使用: `path.join()`来辅助拼接。

所以为了避免上面那种问题，以后相对路径都统一换成**动态绝对路径**

> 补充：模块中的路径表示和这里的路径没关系，不受影响。 require('./b')不受影响！！！！

```javascript
fs.readFile(path.join(__dirname, "./a.txt"), "utf-8", function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})

```



## 其他



### 10.2解决改完代码让服务器自动重启

可以使用第三方命令行工具：`nodemon`来解决频繁修改代码重启服务器问题。

`nodemon`是基于Node.js开发的第三方命令行工具，我们需要独立安装

```shell
# 在任意目录执行该命令都行
npm install --global nodemon
```

安装完毕之后，使用：

```shell
node app.js

#使用 nodemon
nodemon app.js
```

只要是通过nodemon app.js 启动的服务，他会监视你的文件变化，当文件发声变化的时候自动会帮你重启服务器。

### 10.3 文件操作路径和模块路径

文件操作路径

```java
/**
  在文件操作的相对路径中
  。/data/a.txt 当前目录
  data/a.txt 当前目录
  /data/a.txt 绝对路径，当前文件模块所处磁盘根目录
  C:/xx/xx..绝对路径
  
  fs.readFile('./data/txt')
*/
```

模块操作路径：

```
//如果这里忽略了 `.`则也是磁盘根目录
require('/data/foo.js')

//相对路径
require('./data/foo')

//模块加载的路径中 不能省略./
```

