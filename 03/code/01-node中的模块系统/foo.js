var foo = " bar"

function xzc(x, y) {
  return x + y
}

//可以通过多次对exports对象添加成员实现导出

// exports= add //打印出来是个 {} 不行

//如果一个模块需要直接导出一个成员，而非挂载的方式
//那必须使用下面这个方式
module.exports = "Hello" //到处去的就是 ： [Function: add]


//后者会覆盖前者
module.exports = {
  add: function add(x, y) {
    return x + y
  },
  str: "123",
}
 
module.exports.a = '123'


 