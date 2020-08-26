下午总结：



- path模块
- `__dirname`和  `__filename`的区别
  - **动态的**获取当前文件的或目录的绝对路径
  - 用来解决文件操作的相对路径问题
  - 因为在文件操作中，相对路径相对于执行`node`命令所处的路径
  - 所以为了避免这个问题，都建议文件操作的相对路径转为：**动态的**
  - 方式： `path.join(__dirname,'文件名')`
- art-template 模板引擎高级语法
  - include
  - extend
  - block
- 表单同步提交和异步提交
  - 异步提交页面不会刷新，交互更灵活
- Express中配置express-session 插件