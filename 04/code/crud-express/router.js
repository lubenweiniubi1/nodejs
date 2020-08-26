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
var Student = require("./student")

//1,创建一个路由容器
var router = express.Router()

//2.把路由都挂载到这个路由容器router中
router.get("/students", (req, res) => {
  //readFile的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照utf8编码，转成我们能认识的字符
  //除了这样之外 也可通过 toString ()
  // fs.readFile("./db.json", "utf8", function (err, data) {
  //   if (err) {
  //     return res.status(500).send("server error")
  //   }
  //   //这个是string,需要通过转成对象
  //   console.log(JSON.parse(data))
  //   res.render("index.html", {
  //     students: JSON.parse(data).students,
  //   })
  // })

  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send("服务器错误")
    }
    res.render("index.html", {
      students: students,
    })
  })
})

router.get("/students/new", function (req, res) {
  res.render("new.html")
})

router.post("/students/new", function (req, res) {
  //1，获取数据
  //2，处理将数据保存到db.json文件中用以持久化
  //3.发送响应
  // 先读取出来，转成对象
  //然后往对象中push
  // 然后把对象转成字符串
  //塞回去
  var student = req.body
  Student.save(student, function (err) {
    if (err) {
      res.status(500).send("server error")
    } else {
      res.redirect("/students")
    }
  })
})

router.get("/students/edit", function (req, res) {
  //1. 在客户端的列表页面中处理链接问题(需要有id参数)
  //2. 获取要编辑的学生id
  //3. 渲染编辑页面
  //  根据id把学生信息查出来
  //  使用模板引擎渲染页面
  Student.findById(parseInt(req.query.id), function (err, student) {
    if (err) {
      return res.status(500).send("Server error")
    }
    res.render("edit.html", {
      student: student,
    })
  })
})

router.post("/students/edit", function (req, res) {
  var student = req.body

  Student.updateById(req.body, function (err) {
    if (err) {
      res.status(400).send("更新失败")
    } else {
      res.redirect("/students")
    }
  })
})

router.get("/students/delete", function (req, res) {
  //1,获取id
  //2,删除操作
  //3，根据操作结果发送响应数据
  console.log(req.query.id)
  Student.delete(req.query.id, function (err) {
    if (err) {
      return res.status(500).send("你好")
    }
    res.redirect("/students")
  })
})

//3.把router 导出
module.exports = router

/*
 module.exports = function (app) {
  app.get("/students", (req, res) => {
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
  app.get("/students/new", function (req, res) {
    return
  })
  app.post("/students/new", function (req, res) {
    return
  })
  app.get("/students/edit", function (req, res) {
    return
  })
  app.post("/students/edit", function (req, res) {
    return
  })
  app.post("/students/delete", function (req, res) {
    return
  })
}
*/
