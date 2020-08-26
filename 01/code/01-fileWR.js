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