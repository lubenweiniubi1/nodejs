/**
 * student.js
 * 读取操作文件模块
 * 职责： 操作文件中的数据，只处理数据，不关心业务
 * 学习node的精华部分
 */
var fs = require("fs")
const { response } = require("express")
var dbPath = "./db.json"
/**
 * 获取所有学生列表
 */
exports.find = function (callback) {
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err) //可以根据err自定义一些异常处理操作
    }
    //第一个参数设置成err，第二个为结果
    // 成功 err 是null
    // JSON.parse()可以转二进制了
    callback(null, JSON.parse(data).students)
  })
}
/**
 * 根据id获取学生信息对象
 * @param {number} id
 * @param {Function} callback
 */
exports.findById = function (id, callback) {
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err) //可以根据err自定义一些异常处理操作
    }
    //修改谁 就找出来
    var students = JSON.parse(data).students

    //EcmaScript6 中的一个数组方法： find,需要接收一个函数作为参数,返回的而是内存引用，所以修改就直接修改了
    var student = students.find(function (item) {
      return item.id === parseInt(id)
    })
    callback(null, student)
  })
}
/**
 * 添加保存学生
 */
exports.save = function (inputStudent, callback) {
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err) //可以根据err自定义一些异常处理操作
    }
    var students = JSON.parse(data).students
    //处理id唯一，不重复
    inputStudent.id = students[students.length - 1].id + 1
    students.push(inputStudent)
    var fileData = JSON.stringify({
      students: students,
    })

    fs.writeFile(dbPath, fileData, function (err, data) {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}
/**
 * 更新学生
 */
exports.updateById = function (student, callback) {
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err) //可以根据err自定义一些异常处理操作
    }
    //修改谁 就找出来
    var students = JSON.parse(data).students
    student.id = parseInt(student.id)
    //EcmaScript6 中的一个数组方法： find,需要接收一个函数作为参数,返回的而是内存引用，所以修改就直接修改了
    var stu = students.find(function (item) {
      return item.id === student.id
    })

    for (var key in student) {
      stu[key] = student[key]
    }

    var fileData = JSON.stringify({
      students: students,
    })

    fs.writeFile(dbPath, fileData, function (err, data) {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
 * 删除学生
 */
exports.delete = function (id, callback) {
  var id = parseInt(id)
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    var targetIndex = students.findIndex((item) => {
      return item.id === id
    })
    console.log(targetIndex)
    students.splice(targetIndex, 1)
    
    var fileData = JSON.stringify({
      students: students,
    })
    fs.writeFile(dbPath, fileData, function (err, data) {
      if (err) {
        console.log(err)
        return callback(err)
      }
      console.log("删除成功")

      callback(null)
    })
  })
}
