# 公有云插件(WorkPlus_PublicClound)
---

##1. 跳转到个人详情页面
>通过轻应用数据，跳转到个人详情页面

请求调用示例:

```javascript
function toPersonal(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_PublicClound",
        "toPersonal", 
        [
        	{
        	 "finish_view":false
        	 "user_id":"用户id",
        	 "username":"用户username",
        	 "mobile":"用户手机",
        	 "domain_id":"用户域id"
        	}
        ]
        );
}

说明：
请求输入数据：

[
	{
	 "user_id":"用户id",
	 "domain_id":"用户域id",
	 "username":"用户username",
	 "mobile":"用户手机",
	 "registered":  false, 是否为注册用户(非必填, 默认 false)
	 "finish_view": true, 是否关闭当前页面 (非必填, 默认 true)
	}
]
请求返回数据：无
```

##2. 获取WorkPlus信息
>获取workplus版本信息

请求调用示例:

```javascript
function getAppInfo(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_PublicClound",
        "getAppInfo", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：
{
	"version_code":"应用当前版本versioncode",
	"version_name":"应用当前版本名称",
	"app_name":"应用名",
	"bundle_id":"应用包名/bundleId",
	"app_icon":"应用图标",
}
```

<br/>