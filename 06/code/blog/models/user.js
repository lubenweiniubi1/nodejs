const mongoose = require("mongoose")
var Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

var userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  create_time: {
    type: Date,
    //Data.now() 直接即时调用了，写死了时间戳，每次newSchema 永远是 new Schema的时候的时间戳了
    //这里直接给一个方法：Date.now
    //当你去new Model的时候 ，如果没有传递create_time,则mongoose 就会调用default指定的方法
    default: Date.now,
  },
  last_modified_time: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
    default: "/public/img/avatar-max-img.png",
  },
  bio: {
    //个人简介
    type: String,
    default: "",
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1,
  },
  birthday: {
    type: Date,
  },
  status: {
    type: Number,
    //0 没有权限限制
    //1 不可以评论
    //2 不可以登陆
    enum: [0, 1, 2],
    default: 0,
  },
})

module.exports = mongoose.model("User", userSchema)
