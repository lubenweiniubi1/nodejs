const mongoose = require("mongoose")
var Schema = mongoose.Schema

mongoose.connect("mongodb://localhost:27017/itcast", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

var studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    default: 0,
    enum: [0, 1],
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String,
  },
})

//导出模型构造函数
module.exports = mongoose.model("Student", studentSchema)
