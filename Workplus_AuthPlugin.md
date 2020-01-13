# 登录用户权限信息插件(WorkPlus_Auth)
---


##1. 获取临时ticket接口
>为当前登录用户获取一个临时性的ticket
>

请求调用示例:

```javascript
function getUserTicket(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Auth",
        "getUserTicket", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"user_ticket":"申请到的用户ticket"	
}

```

##2. 获取当前登录用户的accessToken
>当前登录用户的accessToken
>

请求调用示例:

```javascript
function getAccessToken(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Auth",
        "getAccessToken", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"access_token":"用户登陆的access_token"	
}
```

##3. 获取当前app请求后台api地址
>获取当前app请求后台api地址
>

请求调用示例:

```javascript
function getServerInfo(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Auth",
        "getServerInfo", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"api_url":"app后台地址"	
}
```

##4. 告诉WorkPlus当前的accessToken已过期
>通过轻应用告知当前accessToken过期，workplus推出当前登录状态
>

请求调用示例:

```javascript
function onAccessTokenOverdue(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Auth",
        "onAccessTokenOverdue", 
        []);
}

说明：
请求输入数据：无
请求返回数据：无
app弹框请求退出重新登录
```

##5. 获取当前的租户id
>获取当前租户id，即域id
>

请求调用示例:

```javascript
function getTenantID(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Auth",
        "getTenantID", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
		
	“domain_id”:"当前的域id"
	------------v2数据-------------
	"tenant_id":"当前的域id"
}
```

##6. 获取当前登录用户最基本详情
>获取当前登录用户最基本详情，包括token，用户信息
>

请求调用示例:

```javascript
function getLoginUserInfo(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Auth",
        "getLoginUserInfo", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	{
		"login_token": //当前登陆的accessToken信息
		{
			"access_token":"当前登陆的access_token",
			"refresh_token":"刷新token",
			"issued_time":"生效时间",
			"expire_time":"过期时间",
			"client_id":"所持有的用户的用户id"
		}
		
	},
	{
		"login_user": 
		{
			"username":"用户注册username",
			"name":"用户名",
			"avatar":"用户头像"
		 }
	}
}
```



##7. 人脸识别(需商务确定人脸识别方案)
>唤起人脸识别验证(具体 sdk 根据当前打包配置)
>

请求调用示例:

```javascript
function faceBizValid() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Auth",
                "faceBioAuth", [{}]);
        }
说明：
请求输入数据：无
请求返回数据：无
```

##8. 获取签名信息（定制）
>针对特定的平台
>

请求调用示例:

```javascript
function getSignature(){
    cordova.exec(function(result) {
        alert(JSON.stringify(result, null, 4));
    },
    function(error) {
        alert("调用失败");
    },
    "WorkPlus_HTMember",
    "getSignature", 
    []);
}

说明：
请求输入数据：无
请求返回数据：
{
    "channel_id":"",
    "signature":"",
    "nonce":"",
    "timestamp":""
}
```

<br/>
