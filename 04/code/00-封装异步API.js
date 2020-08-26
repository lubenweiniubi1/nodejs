//回调 上层传递下层调用
function fn(callback) {
  //var callback = function (data){}
  setTimeout(function () {
    var data = "hello"
    callback(data)
  }, 1000)
} //表示在1s之后给data赋值

//如何调用fn ，得到内部的data

//如果需要获取一个函数中异步操作的结果，则必须通过回调函数获取
fn(function (data) {
  console.log(data)
})
