# iBeacon 会议相关接口(WorkPlus_Ibeacon)
---

# 读写iBeacon

## 1. 扫描所有的设备
>扫描设备 需要开启蓝牙 获取到所有设备

请求调用示例:

```javascript
    function scanPeripherals(){
        
        cordova.exec(
                     function(result){
                     alert(JSON.stringify(result,null,4));
                     },
                     function(error){
                     alert(JSON.stringify(error,null,4));
                     },
                     "WorkPlus_Ibeacon",
                     "scanPeripherals",[{
                     "timeout" : 5,        // 超时时间，没有数据返回 超时时间才会生效
                     "return_count" : 10,  // 扫描得到的个数
                     "is_stop" : false,     // 是否一直扫描true 停止扫描， false 不停止扫描
                     "device_name":"e-beacon" // 传空，返回全部的数据，
                     }]
                     );
    }
            
 说明:
 请求输入数据: 
 [{
 "timeout" : 5,        // 超时时间，没有数据返回 超时时间才会生效
 "return_count" : 10,  // 扫描得到的个数
 "is_stop" : false,     // 是否一直扫描true 停止扫描， false 不停止扫描
 "device_name":"e-beacon" // 传空，返回全部的数据，-->筛选条件建议传空
 }]
                         

请求返回数据:
正常情况：
{
"code": 1,
"message": "获取成功",
"value": [{  
@"device_platform":"iOS",  // 获取设备的平台iOS android,  iOS平台获取到的是UUID， android获取到的是Mac地址
@"device_id": "732DDBD1-C4A5-FBA1-57A3-3CD70222DF7B", // 设备唯一地址 UUID
@"device_name" : "MacBook Pro",  // 设备名称
@"device_rssi" : 50,             // 设备信号强度，越小离得越近（0~100）
@"device_isConnect" : true       // 是否已经连接
}]
}


 
 出错情况：
 情况一：后台传参错误
 {
 "code": 0,
 "message": "请输入参数",
 "value": ""
 }
 情况二：后台传参错误

 {
 "code": 0,
 "message": "返回个数有误",
 "value": ""
 }
 情况三：请求超时

 {
 "code": 0,
 "message": "请求超时",
 "value": ""
 }
 
 情况四：蓝牙权限
 
 {
 "code": 0,
 "message": "请打开蓝牙权限",
 "value": ""
 }
 
```



## 2. 获取当前设备的特征（characteristic)
>获取设备特征,特征ID可以用于后面的修改。
>设备要调到可写入状态，一般是快闪。（安卓手机可能要手动到设置蓝牙界面链接）
>请求调用示例:

```javascript
function searchCharacteristics(){
        
        cordova.exec(
                     function(result){
                     alert(JSON.stringify(result,null,4));
                     },
                     function(error){
                     alert(JSON.stringify(error,null,4));
                     },
                     "WorkPlus_Ibeacon",
                     "searchCharacteristics",[{
                             "device_id" : "732DDBD1-C4A5-FBA1-57A3-3CD70222DF7B",   // 设备id
                             }]
                     );
    }
    
          
 说明:
 请求输入数据: 
 [{
     "device_id": "732DDBD1-C4A5-FBA1-57A3-3CD70222DF7B" //设备id
 }]
 请求返回数据:
 
 {
 "code": 1,
 "message": "获取成功",
 "value": {
 "major_id" : "F000BC53-0451-4000-B000-000000000000",
 "minor_id" : "F000BC54-0451-4000-B000-000000000000",
 "sn_id"    : "F000BC57-0451-4000-B000-000000000000"
 }
 }

出错情况：
{
"code": 0,
"message": "没有找到该设备",
"value": ""
}

```

## 3. 写入设备Maijor
>写入设备Maijor
>请求调用示例:

```javascript
    function writeMajor(){
        
        cordova.exec(
                     function(result){
                     alert(JSON.stringify(result,null,4));
                     },
                     function(error){
                     alert(JSON.stringify(error,null,4));
                     },
                     "WorkPlus_Ibeacon",
                     "writeMajor",[{
                                    "major_id" : "F000BC53-0451-4000-B000-000000000000",   // major_id
                                    "major_value" : "2432" // 16进制 0000~ffff
                                    }]
                     );
    }
    
          
 说明:
 请求输入数据: 
 [{
	"major_id" : "F000BC53-0451-4000-B000-000000000000",   // maijor_id
	"major_value" : "2432" // 16进制 0000~ffff, 请严格返回4位
 }]
 请求返回数据:
{
 	"code": 0,
 	"message": "写入失败",
    "value": ""
 }

{
 	"code": 1,
 	"message":"写入成功",
    "value": ""
 }

```


## 4. 写入设备Minor
>写入设备Minor
>请求调用示例:

```javascript
    function writeMinor(){
        
        cordova.exec(
                     function(result){
                     alert(JSON.stringify(result,null,4));
                     },
                     function(error){
                     alert(JSON.stringify(error,null,4));
                     },
                     "WorkPlus_Ibeacon",
                     "writeMinor",[{
                                    "minor_id" : "F000BC54-0451-4000-B000-000000000000",   // minor_id
                                    "minor_value" : "3223" // 16进制 0000~ffff
                                    }]
                     );
    }    
          
 说明:
 请求输入数据: 
 [{
	"minor_id" : "F000BC54-0451-4000-B000-000000000000",   // minor_id
	"minor_value" : "2432" // 16进制 0000~ffff, 请严格返回4位
 }]
 请求返回数据:
{
 	"code": 0,
 	"message":"写入失败",
     "value": ""
 }

{
 	"code": 1,
 	"message":"写入成功",
     "value": ""
 }

```

## 5. 写入SerailNumberValue
>写入设备标识
>请求调用示例:

```javascript
function writeSNValue(){

    cordova.exec(
    function(result){
            alert(JSON.stringify(result,null,4));
        },
        function(error){
            alert(JSON.stringify(error,null,4));
        },
        "WorkPlus_Ibeacon",
        "writeSNValue",[{
            "sn_id" : "F000BC57-0451-4000-B000-000000000000",   // sn_id
            "sn_value" : "12345678" // 16进制 0000~ffff
        }]
    );
}

说明:
请求输入数据: 
[{
"sn_id" : "F000BC57-0451-4000-B000-000000000000",   // sn_id
"sn_value" : "12345678" // 16进制 0000~ffff
}]

请求返回数据:
{
"code": 0,
"message":"写入失败",
"value": ""
}

{
"code": 1,
"message":"写入成功",
"value": ""
}

```
## 6. 读取SerailNumberValue
>读取设备标识
>请求调用示例:

```javascript
function readSNValue(){

cordova.exec(
    function(result){
        alert(JSON.stringify(result,null,4));
    },
    function(error){
        alert(JSON.stringify(error,null,4));
    },
    "WorkPlus_Ibeacon",
    "readSNValue",[{
        "sn_id" : "F000BC54-0457-4000-B000-000000000000"   // sn_id
    }]
    );
}    

说明:
请求输入数据: 
[{
"sn_id" : "F000BC54-0457-4000-B000-000000000000"   // sn_id
}]
请求返回数据:
{
"code": 0,
"message":"写入失败",
"value": ""
}

{
"code": 1,
"message":"写入成功",
"value": {
"sn_value" : "29387293" // 返回16进制
}
}

```

# 考勤打卡

## 7. 扫描iBeacon设备
>注册iBeacon设备
>请求调用示例:

```javascript
    function registerIbeacon(){
        
        cordova.exec(
                    function(result){
                    alert(JSON.stringify(result,null,4));
                    },
                     function(error){
                     alert(JSON.stringify(error,null,4));
                     },
                     "WorkPlus_Ibeacon",
                     "registerIbeacon",[{
                               "device_id": ["732DDBD1-C4A5-FBA1-57A3-3CD70222DF7B"], // 必传
                               "timeout": 5  // 1、如果所有的UUID扫描成功，超时时间还没到，返回数据。  2、如果所有的UUID还没扫描完成，超时时间到，返回已扫描的。     
                               }]
                     );
    }  
 说明:
 请求输入数据: 
 [{
 "device_id": ["732DDBD1-C4A5-FBA1-57A3-3CD70222DF7B"], // 必传
 "timeout": 5  // 1、如果所有的UUID扫描成功，超时时间还没到，返回数据。  2、如果所有的UUID还没扫描完成，超时时间到，返回已扫描的。     
 }]

请求返回数据:
情况一：蓝牙权限
{
"code": -1,
"message":"获取失败",
"value": ""
}
情况二：蓝牙权限

{
"code": -2,
"message": "请打开蓝牙权限",
"value": ""
}
情况三：定位权限

{
"code": -3,
"message": "定位无法使用！",
"value": ""
}
成功情况
{
"code": 1,
"message":"获取成功",
"value": [{
"device_id":"",
"major":9876,
"minor":1234,
"rssi":40  // 越小，信号值越强
}]
}

```

# 单独给后台获取设备的UUID
## 8.获取iBeacon UUID(iOS私有方法，不能上架App Store）
>获取iBeacon UUID
>请求调用示例:

```javascript
    function scanIbeacon(){

        cordova.exec(
            function(result){
                alert(JSON.stringify(result,null,4));
                },
                function(error){
                alert(JSON.stringify(error,null,4));
                },
                "WorkPlus_Ibeacon",
                "scanIbeacon",{}
            );
    }  
说明:
请求输入数据: 
{}
请求返回数据:
{
"code": 0,
"message":"获取失败",
"value": ""
}

{
"code": 1,
"message":"获取成功",
"value": [{
"device_id":"",
"major":9876,
"minor":1234,
"rssi":40  // 越小，信号值越强
}]
}
```
# 跳转到app设置界面
## 9.跳转到app设置界面
>跳转设置界面
>请求调用示例:

```
function jumpToSetting(){

    cordova.exec(
        function(result){
            alert(JSON.stringify(result,null,4));
        },
        function(error){
            alert(JSON.stringify(error,null,4));
        },
        "WorkPlus_Ibeacon",
        "jumpToSetting",
		[{"type":"bluetooth"}]
        );
}


请求输入数据: 
{
"type":"bluetooth"//需要跳转到其他页面时则为空，蓝牙设置时传"bluetooth"
}
请求返回数据:
{}
```
