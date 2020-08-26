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
