# 设备插件(WorkPlus_DeviceInfo)
---
## 1. 获取IP地址
>获取当前连接状态下的IP地址

请求调用示例:

```javascript
function getIpAddress(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_DeviceInfo",
        "getIpAddress", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：

 {
	"result": "ok",
	"ipAddress":"手机连接网络的ip地址"
 }
```

## 2. 获取设备信息
>获取当前设备和WorkPlus的一些信息

请求调用示例:

```javascript
function getDeviceInfo(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_DeviceInfo",
        "getDeviceInfo", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：

 {
	"device_id":"设备id",
	"platform":"平台（android/ios）",
	"domain_id":"域id",
	"product_version":"workplus当前应用的versionCode",
	"system_version":"使用的系统版本（ios9 / android6.0 等。。）",
	"system_model":"使用的手机型号（iphone7 /android sumsang等。。）",
	"channel_id":"应用的包名",
	"channel_vendor":"Apple or ",
 }
```

<br/>

## 3. 获取设备的运动数据
>获取设备当天凌晨0点至当前时间的运动数据 (从版本3.12.1起提供)

请求调用示例:

```javascript

function getPedometerData(){
   cordova.exec(function(result){
                 alert(JSON.stringify(result, null, 4));
                 },
                 function (error) {
                 },
                 "WorkPlus_DeviceInfo",
                 "getPedometerData",
                 [{}]);
    }
}

说明：
请求输入数据：无
请求返回数据：

 {
	"steps":"步数",
	"distances":"距离，单位米",
 }
 
 如果当前设备计步器不可用，返回code = -10001
```

<br/>