### 注入使用说明

cordova 所依赖的 js 并不需要调用方直接引入, 在原生代码里(android/ ios)已经含有对应的 js sdk 代码, 因此调用方只需要添加以下规则即可调用cordova: 

```javascript
1. <script src="applocal://www/cordova.min.js"></script>

	// "xxx/xxx/cordova.min.js"为内容是空的 cordova.min.js 文件路径, 也即存在该文件,但不需要实际内容
2. <script src="https://xxx/xxx/cordova.min.js"></script>   
```

其中需要注意的是,  `语句2` 是为了兼容在 android 6.0 以下, **https** 环境里自定义协议头, 如`语句1`中的 `applocal://` 会出现报错, 无法正常使用.

因此以上2个语句都是**必须**的, 否则在部分 android 机器会出现 cordova 无法调用的问题.



### 注入成功回调

当接收到以下回调时, 才说明 cordova 注入成功, 并且能开始调用:

```javascript
document.addEventListener("deviceready", function () {
    //可以开始调用 cordova 了
    
}, false);

```



