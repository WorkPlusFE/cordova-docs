# 网页的相关插件调用(WorkPlus_WebView)
---

##1. 打开WorkPlus里已有的html
>传入相对地址，打开WorkPlus里已有的网页

请求调用示例:

```javascript
function openLocalURL(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "openLocalURL", 
        [{"localURL":"打开本地所在的html文件地址"}]
        );
}

说明：
请求输入数据：[{"localURL":"打开本地所在的html文件地址"}]
请求返回数据：无
```


##2. 打开一个网页(Workplus 3.1.3以上版本新增 use\_android\_webview参数)
>传入地址，打开WorkPlus网页

请求调用示例:

```javascript
function openWebView(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "openWebView", 
        [
        	{
	        	"url":"打开的网址url", 
	        	"title":"打开网页的标题",
	        	"use_android_webview": true, //是否使用 android 原生 webview 打开, 否则使用workplus 订制的 webview
	        	"display_mode": "FULL_SCREEN"//全屏打开 webview(即不包含原生标题栏), 默认非全屏
        	}
        ]
        );
}

说明：
请求输入数据：
[
	{
    	"url":"打开的网址url", 
    	"title":"打开网页的标题"
	}
]


请求返回数据：无
```

##3. 锁定网页顶部栏
>锁定顶部栏，使得顶部栏按钮无效

请求调用示例:

```javascript
function navigation(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "navigation", 
        ["lock"/“unlock”]
        );
}

说明：
请求输入数据：["lock"]
请求返回数据：无
```

##4. 更换左侧按钮动作
>更换左侧的按钮动作

请求调用示例:

```javascript
function leftButton(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "leftButton", 
        ["back"]
        );
}

function back(){
	alert("想返回，没门");
}



说明：
调用此cordova后，用户点击返回，会弹出一个【想返回，没门】的alert,用户无法返回
```

##5. 更换右侧按钮动作(在workplus3.1.3版本之后新增disable参数)
>更换右侧的按钮动作

请求调用示例:

```javascript
function rightButtons(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "rightButtons", 
        [
         [
          {
          "disable":"false",
           "icon":"图标",
           "title":"标题",
           "action":"动作 list等",
           "value":""
          }
          ...
         ]
        	...
        ]
        );
}

说明：
请求输入数据：
[
 [
  {
  "disable":"按钮是否可用 ture（不可用）/ false（可用）"
   "icon":"图标",
   "title":"标题",
   "action":"动作 list等",
   "value":""
  }
  ...
 ]
	...
]
请求返回数据：无
```

##6. 更换头部title
>更换头部title

请求调用示例:

```javascript
function title(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "title", 
        ["头部显示的标题"]
        );
}

说明：
请求输入数据：["头部显示的标题"]
求返回数据：无
```


##.7 清除左侧按钮
>清除左侧按钮事件和显示

请求调用示例:

```javascript
function clearLeftButton(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "clearLeftButton", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：无
```

##8. 清除右侧按钮
>清除右侧按钮事件和显示

请求调用示例:

```javascript
function clearRightButtons(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "clearRightButtons", 
        []
        );
}

说明：
请求输入数据：无
求返回数据：无
```

##9. 退出webview
>关闭整个webview

请求调用示例:

```javascript
function exit(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "exit", 
        []
        );
}

说明：
请求输入数据：无
求返回数据：无
```

##10. 弹出分享对话框
>弹出分享对话框，跳转分享

请求调用示例:

```javascript
function share(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "share", 
        [{"url":"http://www.baidu.com","title":"百度一下","cover_media_id":"分享图标mediaId", "scope" : 0, "summary": "abc"}]
        );
}

说明：
请求输入数据：

"url":"http://www.baidu.com"
"title":"百度一下"
"cover_media_id":"分享图标mediaId",
"cover_url":"分享图标 url ", 
"scope": 0 // 该字段是用于显示范围, 0 只显示内部分享的操作, 包括"发送给", "分享到圈子", 1则显示全部
"summary" : "abc" //分享链接的摘要  

"dicrectly": "w6s_contact",
//直接执行分享操作支持:
//w6s_contact 对应"分享弹出窗"的"发送给", 为App内部的联系人等列表,
//w6s_current_session 表示直接分享给指定会话, 无任何弹出窗或者选择界面
//后期扩展更多直接分享的类型, 敬请期待
//当dicrectly存在值时, scope参数无意义, 请忽略, 默认dicrectly为空, 也即该接口会显示"分享弹出框"

//dicrectly为 "w6s_current_session"时, 以下参数用以指定分享的会话
"direct_session": {
	"id" : "xxxx",
	"type": "discussion"
}





求返回数据：无
```


##11. 跳转到workkplus特定页面
>跳转到workkplus特定页面


请求调用示例:

```javascript
function toActivity(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "toActivity", 
        [{
          "activity":"toMain",
          "client_id":"用户id",
          "next_url":"www.baidu.com",
          "access_token":"123456789",
          "username":"用户注册username",
          "name":"用户名字"
        }]
        );
}

说明：
请求输入数据：

[{
  "activity":"toMain",
  "client_id":"用户id",
  "next_url":"www.baidu.com",
  "access_token":"123456789",
  "username":"用户注册username",
  "name":"用户名字"
}]
求返回数据：无
```


##12. 是否隐藏或显示左侧的按钮和关闭字样
>是否隐藏或显示左侧的按钮和关闭字样

请求调用示例:

```javascript
function visibleLeftButton(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "visibleLeftButton", 
        [{
          "showBack":"是否显示返回图标 true/false",
          "showClose":"是否显示关闭图标 true/false",
        }]
        );
}

说明：
请求输入数据：

[{
  "showBack":"是否显示返回图标 true/false",
  "showClose":"是否显示关闭图标 true/false",
  
}]
求返回数据：无
```


<br/>

##13. 更换左侧侧按钮和定义动作(在workplus3.1.3版本之后新增disable参数)
>更换左侧的按钮动作

请求调用示例:

```javascript
function changeLeftButton(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "changeLeftButton", 
        [
         [
          {
          "disable":"false",
           "icon":"图标",
           "title":"标题",
           "action":"动作 list等",
           "value":""
          }
          ...
         ]
        	...
        ]
        );
}

说明：
请求输入数据：
[
 [
  {
  "disable":"按钮是否可用 ture（不可用）/ false（可用）"
   "icon":"图标",
   "title":"标题",
   "action":"动作 list等",
   "value":""
  }
  ...
 ]
	...
]
请求返回数据：无
```

##14. 控制屏幕旋转(WorkPlus版本3.1.3以上版本使用)
>根据参数控制屏幕横屏显示或者竖屏显示

请求调用示例:

```javascript
function changeOrientation(){
        cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_WebView",
        "changeOrientation",
        [{"landscape": true, "lock" : false}]
        );
        }

说明：
请求输入数据：
[
  {
  	"landscape": true, //表示横屏或者竖屏(可不传)
  	"lock": true  
  	//true 表示锁定当前横屏或者竖屏的状态, false 表示 app 随用户系统设置来控制旋转, **该参数默认为 false**
  }
 ]
请求返回数据：无
```

## 15. 添加水印

> 给页面添加水印

```javascript
 cordova.exec(function(winParam) {
                         },
                         function(error) {
                         alert("调用失败");
                         },
                         "WorkPlus_WebView",
                         "addWaterMask",
                         [{
                         "textColor" : "#000000",
                         "orgId":"XXX",
                         "alpha":1.0,
                         "verticalPadding":40,
                         "fontSize":16
                         }]);
说明：
请求输入数据：
[
  {
   "textColor" : "#000000", // 字体颜色
   "orgId":"XXX",   // 组织id，传值则以这个组织下的雇员名显示内容，可不传，默认当前组织
   "alpha":1.0,          // 水印文字透明度 0-1.0之间，可不传， 默认1.0
   "verticalPadding":40, // 水印文字上下的垂直高度（密度），可不传，默认40
   "fontSize":16         // 字体大小，可不传，默认16
  }
 ]
请求返回数据：无
```

## 16. 移除水印

```javascript
    cordova.exec(function(winParam) {
        },
    function(error) {
        alert("调用失败");
    },
    "WorkPlus_WebView",
    "removeWaterMask",[]);
```


## 17. 注册摇一摇监听
> 注册摇一摇监听

```javascript
function registerShakeListener() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result));
    },
    function (error) {
        alert("调用失败");

    },
    "WorkPlus_WebView",
    "registerShakeListener", []);
}
```

前端需要实现`onWorkplusShake()` 方法, 在该处执行自己的业务, 摇一摇后将在该方法回调.

<br/><br/>



## 18. 注销摇一摇监听

```javascript
function unregisterShakeListener() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result));
    },
    function (error) {
        alert("调用失败");

    },
    "WorkPlus_WebView",
    "unregisterShakeListener", []);
}
```

<br/><br/>


## 19. 微信分享(会话/朋友圈)
> 根据接口直接调起微信分享页面

请求调用示例:

```javascript
function wxShare() {
    cordova.exec(function (result) {
        alert("微信分享成功");
    },
        function (error) {
            alert("微信分享失败");
        },
        "WorkPlus_WebView",
        "wxShare", [{
            "app_id": "wx63f4a539bf345965",
            "title": "这是一个标题",
            "type"  : "webpage",
            "description": "这是概要，你信不信",
            "thumb": "base64://xxxxx==",
            "scene": 0,
            "data"  : { "url" : "https://www.baidu.com" }
        }]);
}
``` 

说明：

请求输入数据：

```json
app_id : 微信的AppId
title: 分享的标题
type: 分享的消息类型，webpage(网页链接), image(图片)
description: 描述
thumb: 缩略图数据
scene: 0 为聊天界面 1为朋友圈
data: {"url": "www.baidu.com"} or {"image": "base64://AAAAAA=="}
type为webpage时 url字段为分享的链接
type为image时 image为分享的图片链接或者是base64
```

## 20. 修改顶部栏颜色

> 时间和电量的那一栏（最顶上），而Header部分的颜色，需要在后台添加应用的时候设置

*该方法无需调用 Cordova 接口*

在html页面的 `<head>` 标签里添加该标签即可，其中content的内容必须为 HEX 格式（以井号开头）。

```html
<meta name="_navigation_color" content="#194c7b" />
```



## 21. 语音转文本
```javascript
function voiceToText() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_WebView",
        "voiceToText", []);
}

请求输入数据：无
请求返回数据：
{
	"message": "xxx"  //语音转出的文本
}
```


