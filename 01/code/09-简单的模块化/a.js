//require 作用 加载模块
//在Node中，模块有三种 ：
//     具名的核心模块，
//     用户自己编写的文件模块
// 后缀名可省
//相对路径的./不能省略 
// 在node中，没有全局作用域，只有模块作用域，超出这个文件的都不管用
//    外部访问不到内部，内部无法访问到外部
// 有时候，加载文件的目的不是为了简单的执行代码，重要的是使用某个成员

var foo = "aaa"
console.log(" a start")

// require("./b.js")
//推荐 require("./b")

//Error: Cannot find module 'b'
// require("b")

console.log("a end")
console.log(foo)//b中的foo没有影响
