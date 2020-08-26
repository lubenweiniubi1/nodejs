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

//要求必须a读完了 b，然后再c
