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

##2. 原生app 路由跳转(WorkPlus版本3.1.3以上版本使用)
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
 scheme_url: ios 跟 android 都支持
 android_explicit_intent: 为android的传参形式, ios 不支持该方式.
 
请求返回数据：无
```