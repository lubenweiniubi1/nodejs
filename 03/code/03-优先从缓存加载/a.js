console.log("a被加载了")
var fn =require('./b')//b里面的代码不会再被执行了，这里只是为了获得exports对象

console.log(fn);
