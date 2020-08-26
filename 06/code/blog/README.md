# Node综合Web案例

## 1.目录结构

```
│  app.js             项目入口文件
│  package-lock.json
│  package.json
│  README.md          项目说明文档
│  router.js
│
├─models              存储使用mongoose数据模型
│      comment.js     
│      topic.js
│      user.js
│
├─public              公共静态资源
│  ├─css
│  │      login.css
│  │      main.css
│  │      markdown-github.css
│  │      settings.css
│  │
│  ├─img
│  │      avatar-max-img.png
│  │      logo3.png
│  │
│  └─js
├─routes             如果业务比较多，代码量大，最好把路由按照业务的分类存储到routes目录中
│      session.js
│      topic.js
│
└─views
    │  index.html
    │  login.html
    │  register.html
    │
    ├─settings
    │      admin.html
    │      profile.html
    │
    ├─topic
    │      edit.html
    │      new.html
    │      show.html
    │
    ├─_layouts
    │      home.html
    │
    └─_partials
            footer.html
            header.html
            settings-nav.html

            

```



## 2. 模板页

+ art-template 子模板
+ art-template 模板继承



## 3. 路由设计

| 路径      | 方法 | get参数 | post 参数               | 是否需要登陆 | 备注             |
| --------- | ---- | ------- | ----------------------- | ------------ | ---------------- |
| /         | GET  |         |                         |              | 首页             |
| /register | GET  |         |                         |              | 渲染注册页面     |
| /register | POST |         | email,nickname,password |              | 处理注册注册请求 |
| /login    | GET  |         |                         |              | 渲染登陆页面     |
| /login    | POST |         | email,password          |              | 处理登陆请求     |
| /logout   | GET  |         |                         |              | 处理退出请求     |



## 4. 书写步骤

+ 创建目录结构
+ 整合静态页-模板页
  + include
  + block
  + extend