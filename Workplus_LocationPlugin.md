### 地理位置信息插件(WorkPlus_Location)
---
#### 1. 获取定位信息
>返回地理位置信息

请求调用示例:

```javascript
function getLocation(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Location",
        "getLocation", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：
{
	"latitude": "xxxx",
	"longitude":"xxx",
	"address" : "广州市天河区 xxx 街道 xxx"  //具体地址信息,
	"city" : "xxx", //广州市
	"district" : "xxx",  //天河区
	"street" : "xxx",    //翰景路
	"aoiName" : xxx	    //金星大厦
}	
```

<br/>



#### 开启自动签到

```javascript
        function OpenSignIn(){
            cordova.exec(function(result) {
                         alert("开启成功");
                         },
                         function(error) {
                         alert("调用失败");
                         },
                         "WorkPlus_Location",
                         "enableOrgSignIn",[]);
        }
```

> 调用此接口，开启的组织为当前用户选择的组织



#### 关闭自动签到

```javascript
       function CloseSignIn(){
            cordova.exec(function(result) {
                         alert(result);
                         },
                         function(error) {
                         alert("调用失败");
                         },
                         "WorkPlus_Location",
                         "disableOrgSignIn",[]);
        }
```

> 调用此接口，关闭的组织为当前用户选择的组织