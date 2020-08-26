## 复习

### 上午总结

+ 代码风格
  + 编写可维护的JavaScript
  + 不仅功能，还要写的漂亮

+ 服务端渲染和客户端渲染的区别：



### 下午总结

写了一个留言板项目：

1. /index.html

2. 开放public目录中的静态资源 
   当请求 /pulic/xxx的时候，读取响应public目录中的具体资源位置
3. /post   post.html
4. /pinglun
   + 接受表单提交数据
   + 存储数据
   + 重定向到 /
     + statusCode
     + setHeader

明天：

+ 模板系统
+ Express （第三方web开发框架）
+ 这两天做的十二，在框架里面就是一个api的事儿
+ 使用框架的目的就是让我们更加专注于业务，而不是底层细节