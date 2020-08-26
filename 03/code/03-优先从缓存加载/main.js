require("./a")

//b里面的代码不会再被执行了，这里只是为了获得exports对象
//优先从缓存加载
//由于a中已经加载b了
//所以在这里不会重复加载，但是不会重复执行代码
//这样的目的是为了提高模块加载效率
var fn = require("./b") 
console.log(fn)
/**
 * a被加载了
b被加载了
[Function (anonymous)]
[Function (anonymous)]
 * 
 */