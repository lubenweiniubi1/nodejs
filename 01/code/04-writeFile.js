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