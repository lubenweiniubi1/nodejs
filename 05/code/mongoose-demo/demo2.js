var mongoose = require("mongoose")
var Schema = mongoose.Schema

//1,连接数据库
//指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect("mongodb://localhost/itcast", { useNewUrlParser: true })

//2,设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//值 每个文档都要有下面的结构，属性类型也要一致
// 约束：保证数据完整性，不要有脏数据
var userSchema = new Schema({
  username: {
    type: String,
    required: true, //必须有
  },
  password: {
    type: String, 
    required: true, //必须有
  },
  email: {
    type: String,
  },
})

//3.将文档结构发布为模型
//  mogoose.model 方法就是用来将一个架构发布为modal
//    第一参数：传入一个大写字母单数字符串来表示你数据库名称
//              mongoose会自动将大写名词字符串生成  小写复数 的集合名称
//                例如这里的User最终会编程users集合名称
//    第二个参数 ：架构schema
//      返回： 模型构造函数
var User = mongoose.model("User", userSchema)

//4. 当我们有了模型构造函数之后，就可以使用这个构造函数对users集合中的数据为所欲为了
/**新增 */
// var admin = new User({
//   username: "admin",
//   password: "123456",
//   email: "admin@admin.com",
// })
// admin.save(function (err, ret) {
//   if (err) {
//     console.log("保存失败")
//   } else {
//     console.log(ret)
//   }
// })

/**查询 */
// User.find((err, res) => {
//   console.log(res)
// })
// User.find({ username: "zs" }, (err, res) => {
//   console.log(res)
// })//不管结果如何都会放在一个数组中
// //findOne 不一样

/**删除 */
// User.remove(
//   {
//     username: "zs",
//   },
//   (err) => {
//     if (err) {
//       console.log("删除失败")
//     }
//     else{
//       console.log('删除陈工');

//     }
//   }
// )
/**更新 */
// User.findByIdAndUpdate(
//   "5f048b04948f241b549bd760",
//   {
//     password: "77777",
//   },
//   (err) => {
//     if (err) {
//       console.log(err)
//     }
//   }
// )
User.update(
  { username: "admin" },
  {
    password: "sa111bi",
  },
   
)
