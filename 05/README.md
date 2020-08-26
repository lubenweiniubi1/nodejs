## 上午总结

- 回调函数
  - 异步编程
  - 如果需要得到一个函数内部异步操作的结果，这个时候必须通过回调

- find、findIndex、forEach
  - 数组遍历的方法都是对函数作为参数的一种应用
  - every
  - some
  - includes
  - map
  - reduce `[1,2,3].reduce((prev,curr)=> prev+curr)` 获取数组所有数的和
- package-lock.json 的作用

- JavaScript 模块化
  - node中的CommonJS
  - 浏览器中的
    - AMD require.js
    - CMD sea.js.
- EcmaScript官方在EcmaScript 6中增加了官方支持
- EcmaScript 6
- MongoDb 数据库
  - 数据库
  - 集合
  - 文档
- MongoDB 官方有个包，用来操作数据库，但是比较麻烦
- mongoose
  - 真正在公司进行开发，使用的是mongoose这个第三方包
  - 他是基于MongoDb官方的mongodb包进一步做了封装
  - 可以提高开发效率
  - 操作数据库更方便
- 掌握使用mongoose 对数据集合进行操作
- 把之气那的crud案例改成MongoDB数据库版本
- 使用Node操作mysql数据库