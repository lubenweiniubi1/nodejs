# Express

## 1.中间件

> http://expressjs.com/en/guide/using-middleware.html

![中间件概念图](C:\Users\卢本伟牛批\Desktop\Technology stack\nodejs\07\中间件概念图.jpg)

中间件本质就是一个请求处理方法，我们把用户从请求到响应的整个过程分发到多个中间件中去处理，这样做的目的是提高代码的灵活性，动态可拓展。

+ 同一个请求所经过的中间件都是同一个请求对象和响应对象

### 1.1.应用程序级别中间件

万能匹配（不关心任何请求路径和方法）：

```javascript
app.use(function (req, res, next) {
  console.log(1)
  next()
})
```

只要是以'/xxx/'开头的：

```javascript
app.use("/a", function (req, res, next) {
  console.log("a2")
  console.log(req.url)
})
```

### 1.2. 路由级别的中间件

get:

```javascript
app.get("/", (req, res, next) => {
  console.log(2)
  next()
})
```

post:

```javascript
app.post("/user", (req, res, next) => {
  next()
})
```

put:

```javascript
app.put("/user", (req, res, next) => {
  next()
})
```

delete:

```javascript
app.delete("/user", (req, res, next) => {
  next()
})
```

### 1.3.错误处理中间件

```javascript
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

###  1.4.内置中间件

- [express.static](http://expressjs.com/en/4x/api.html#express.static) serves static assets such as HTML files, images, and so on.
- [express.json](http://expressjs.com/en/4x/api.html#express.json) parses incoming requests with JSON payloads. **NOTE: Available with Express 4.16.0+**
- [express.urlencoded](http://expressjs.com/en/4x/api.html#express.urlencoded) parses incoming requests with URL-encoded payloads. **NOTE: Available with Express 4.16.0+**

### 1.5. 第三方中间件

- [body-parser](http://expressjs.com/resources/middleware/body-parser.html)
- [compression](http://expressjs.com/resources/middleware/compression.html)
- [connect-rid](http://expressjs.com/resources/middleware/connect-rid.html)
- [cookie-parser](http://expressjs.com/resources/middleware/cookie-parser.html)
- [cookie-session](http://expressjs.com/resources/middleware/cookie-session.html)
- [cors](http://expressjs.com/resources/middleware/cors.html)
- [csurf](http://expressjs.com/resources/middleware/csurf.html)
- [errorhandler](http://expressjs.com/resources/middleware/errorhandler.html)
- [method-override](http://expressjs.com/resources/middleware/method-override.html)
- [morgan](http://expressjs.com/resources/middleware/morgan.html)
- [multer](http://expressjs.com/resources/middleware/multer.html)
- [response-time](http://expressjs.com/resources/middleware/response-time.html)
- [serve-favicon](http://expressjs.com/resources/middleware/serve-favicon.html)
- [serve-index](http://expressjs.com/resources/middleware/serve-index.html)
- [serve-static](http://expressjs.com/resources/middleware/serve-static.html)
- [session](http://expressjs.com/resources/middleware/session.html)
- [timeout](http://expressjs.com/resources/middleware/timeout.html)
- [vhost](http://expressjs.com/resources/middleware/vhost.html)