# 应用市场插件(WorkPlus_AppStore)
---

##1. 添加应用
>添加应用

请求调用示例:

```javascript
function installApp(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_AppStore",
        "installApp", 
        [{"app_id":"xxx"}]
        );
}

说明：
请求输入数据：[{"app_id":"xxx"}]
请求返回数据：
{
	"message": "xxxx",
	"status":"xxx"
}	
```

##2. app 路由跳转(WorkPlus版本3.1.3以上版本使用)
>根据参数跳转指定app

请求调用示例:

```javascript
function routeApp(){
        cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_AppStore",
        "route",
        [
           {
		    "scheme_url": "",
		    "android_explicit_intent": {
		        "package": "com.cimc.app",
		        "init_url": "com.cimc.app.activity",
		        "params": {
		            "xxx": "xxx",
		            "aaa": "bbb"
		        }
		    }
			}
        ]
        );
        }

说明：
请求输入数据：
[
  {
		    "scheme_url": "", 
		    "android_explicit_intent": {
		        "package": "com.cimc.app", //包名
		        "init_url": "com.cimc.app.activity",//跳转的具体页面
		        "params": { //携带参数
		            "xxx": "xxx",
		            "aaa": "bbb"
		        }
		    }
			}
 ]
 scheme_url: ios 跟 android 都支持, 除了原生应用的schema_url 规则, 也支持内部的应用协议, 例如:workplus://openApp?id=abc&domainId=abc
 
 android_explicit_intent: 为android的传参形式, ios 不支持该方式.
 
请求返回数据：

{
	"code":3,
	"message":"应用不存在"
}

```




##3. 管理员身份获取应用信息
>暂时只支持内存里的信息, 用于与h5之间的交互

请求调用示例:

```javascript

function adminQueryApp(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_AppStore",
        "adminQueryApp", 
        [{"app_id":"xxx"}]
        );
}

说明：
请求输入数据：[{"app_id":"xxx"}]
请求返回数据：
{
	.... 格式参考  https://note.youdao.com/ynoteshare1/index.html?id=ff623a7fdec27882141e9968ba2b7f81&type=note 里
"获取组织下所有应用(组织管理员身份)"的接口返回数据
}

```


##4. 管理员更新应用信息
> 调用接口后, 会触发原生界面reload 管理应用数据

```javascript

function adminRefreshApps(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_AppStore",
        "adminRefreshApps", 
        []
        );
}


说明：
请求输入数据：
无

请求返回数据：
无


```
