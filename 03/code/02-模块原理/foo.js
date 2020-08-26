//在Node中每个模块内部都有一个自己的module对象
//该module对象中有一个成员: exports
//也就是说如果你需要对外导出成员，只需要把导出的成员挂在到module.exports中
// var module = {
//     exports:{
//      foo :'bar'
// }
// }

// module.exports.foo = "bar"

// exports.a = 'bar' //这句话和上一句话的效果等同 ，是为了简化：exports = module.exports
//也就是说代码中还隐藏一句 var exports = module.exports

console.log(exports === module.exports)

//谁来require 我 谁就得到
//默认在代码最后有一句：
// return module.exports 你也看不见
//也就是说返回的永远是exports的内容，你可以直接将exports赋值（就是default exports情况）
//也可以将exports给添加属性，这时候打印的是哥对象
