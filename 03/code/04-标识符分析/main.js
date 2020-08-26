 //如果非路径形式的模块标记
 //路径形式模块
 //  ./当前目录，不可省略
 //  ../上一级目录，不可省略  
 //  /xxx 几乎不用 
 // d:/sijd 几乎不用
 // 首位的'/' 在这里表示当前文件模块所属磁盘根路径 ，目前我的main放在 c盘，所以这个杠 指的是c盘根路径
// require('./foo.js')

//核心模块本质也是文件
//核心模块文件已经被编译到了二进制中了，我们只需要按照名字来加载就可以ile
//require('fs')

//第三方模块    
//凡是第三方模块都必须通过npm下载
//使用的时候就可以通过require('包名')的方式进行加载才可以使用
//不可能有任何一个第三方包和核心模块名字一样
//既不是核心模块、也不是路径形式的模块
//   先找到当前文件所处目录中的node_modules目录
//    node_modules/art-template
//    再去找node_modules/art-template/package.json文件
//    再去找json中的 main属性
//    main属性中就记录了art-template 的入口模块
//    然后加载使用这个模块
//    实际上最终加载的还是文件
// var template = require ('art-template')

//如果没有package.json 或者main指定的入口文件时错的
// 则node会自动找到该目录下的index.js
//   也就是说 index.js 时默认备胎
//
// 如果以上所有任何一个条件都不成立，会进入上一级目录中的node_modules中查找
// 如果没有 则继续递归向上查找，直到磁盘根目录还找不到，最后报错
//  注意 一个项目只有一个node_modules ，这样子目录可以加载所有第三方模块了
// 不会出现有多个modules目录
//
// 模块查找机制:
// 优先从缓存加载
// 核心模块
// 第三方模块
var myA = require('a')

