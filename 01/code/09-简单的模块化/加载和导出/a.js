//require方法有两个作用
//     1.加载文件模块并执行代码
//     2. 拿到被加载文件模块导出的接口对象
//     在每个模块中提供了一个对象： exports
//     exports默认是个空对象
//    需要呗访问的成员挂到exports中
var bExports = require("./b")

//{}
console.log(bExports.foo)
console.log(bExports.add(10,30))

console.log(bExports.age)
