### 雪松定制化相关接口(WorkPlus_XSSDK)
---
#### 1. 得令sdk 开门
> 集成得令 sdk, 自动开启蓝牙, 搜索周边门禁设备, 并开门

请求调用示例:

```javascript
function openDoor() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result));
    },
        function (error) {
            alert("开门失败");
        },
        "WorkPlus_XSSDK",
        "openDoor", [{
            "key_info": [{
                "pid": "13209B82",
                "lock_id": "1758368186"
            }],
            "mode": 1  
        }]);
}


```

 说明:

 请求输入数据: 

```json
[
    {
        "key_info": [
            {
                "pid": "13209B82",   //门禁 id, 唯一标志
                "lock_id": "1758368186"  //开门秘钥
            }
        ],
        "mode": 1 //1:摇一摇开门, 2:点击开门, 5:亮屏开门(根据文档, 仅ios 支持)
    }
]
```
 ps: 目前公司拿到的用来调试的锁, 对应的 pid 与 lock_id 即为上面所述.

请求返回数据:

```json
{
  "status" : 9, //开门状态, 该方法会持续回调各种状态, 例如蓝牙信号弱, 钥匙不匹配等, 详情见下表
  "message": "xxx"
}
```



| Status | Description                        |
| ------ | ---------------------------------- |
| 0      | 蓝牙已关闭                         |
| 1      | 您没有这道门的钥匙                 |
| 2      | 开始扫描设备(ios 没用到)           |
| 3      | 连接超时                           |
| 4      | 连接失败(ios 没用到)               |
| 5      | 没有扫描到设备                     |
| 6      | 你没有这道门的钥匙                 |
| 7      | 扫描不到设备，正在重试(ios 没用到) |
| 8      | 开门成功                           |
| 9      | 开门失败                           |
| 10     | 开门完成(ios 没用到)               |
| 11     | 蓝牙信号弱                         |

<br/><br/>





#### 2. 得令SDK扫描附近的门禁设备，返回设备ID

请求调用示例:

```javascript
function getDeviceIds() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result));
    },
        function (error) {
            alert("getDeviceIds失败");
        },
        "WorkPlus_XSSDK",
        "getDeviceIds", [{}]);
}
```

 说明:


 请求输入数据: 


 无

 请求返回数据:


```json
["xxx", "xxx", ...]  
```


<br/><br/>


#### 3. 获取当前指定设备的访问记录(刷卡与访客码)
请求调用示例:

```javascript
function getLockRecords() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result));
    },
        function (error) {
            alert("getDeviceIds失败");
        },
        "WorkPlus_XSSDK",
        "getLockRecord", [{ "device_id": "13209B82", "device_password": "1758368186", "record_index": 0 }]);
}
```
说明:<br/>
请求输入数据: 

```json

[
    {
        "device_id": "13209B82",//门禁 ID
        "device_password": "1758368186", //门禁秘钥
        "record_index": 0   //记录数组 index
    }
]

```

请求返回数据:

```json
{
  "total_count": 1, //门禁刷卡次数(包括访客码, 刷卡,  不包含蓝牙)
  "records": "xxxx"   //传入数据 index 对应的门禁数据, 数据为 sdk 生成, 原封不动返回到该处
}
```
