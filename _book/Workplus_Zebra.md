# Zebra cordova 接口
---
## a. 使用说明

因平台的差异, android 与 ios 使用 workplus 连接扫码枪有不用流程.

ios:

1. 首次使用需要使用扫码枪扫描`重置条形码`, 接着扫描`配对条形码`进行设备绑定, 然后获取周边的设备的 `scanner_id` 后, 再主动通过`connect()`方法进行连接, 当收到`成功连接`的回调后, 即可进行使用

2. 设备绑定成功后, 以后都能直接通过`connect()`方法连接. 

3. 当扫码枪被其他手机绑定后, 需再次绑定此前用过的手机, 需要在手机设置里, 把配对过的蓝牙忽略忘记掉, 然后重新走`1`流程.

android:

 	1. 首次使用需要使用扫码枪扫描`重置条形码`, 接着扫描`配对条形码`进行设备绑定, 扫描后扫码枪会自动与手机进行连接, 收到`成功连接`的回调后, 即可进行使用
 	2. 无法使用`connect()`进行手动连接
 	3. 因android 机型差异大, 有些机器再次绑定时, 需要在手机设置里手动忽略掉之前配对过的蓝牙, 然后走`1`流程.



ps: 两个平台当出现无法连接的情况, 建议都进行`3`操作试一遍.



## b. 接口说明

### 1.  获取蓝牙地址(在 android 使用)

> 因 android 系统限制, 7.0以后无法获取, 因此在该接口返回空地址时, 需要引导用户手动输入本机的蓝牙地址, 为了方便引导用户打开查看蓝牙地址的界面, 提供 routeAction() 接口给予跳转

请求调用示例:

```javascript
function getBluetoothAddress() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_DeviceInfo",
        "getBluetoothAddress", []);
}
```

返回数据:

```json
{
    "address": "c0:ee:fb:f6:67:bf"
}
```


### 2. 跳转设置页面 (在 android 使用)

> 根据指定 setting action, 打开指定系统设置页面

请求调用示例:

```javascript
function routeAction() {
    cordova.exec(function (result) {
        alert("调用成功");
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_AppStore",
        "routeAction",
        [
            {
                "android":
                {
                    "action": "android.settings.DEVICE_INFO_SETTINGS"
                }
            }
        ]
    );
}
```



请求参数说明:

```json
{
    "action": "android.settings.DEVICE_INFO_SETTINGS"  
    //根据页面指定 action, "android.settings.DEVICE_INFO_SETTINGS" 为手机状态页面
}
```






### 3. (key-value) 数据存储-读取 (在 android 使用)


   > 这里存储的数据, 基于 android SharePreference 实现, 除非用户手动清除缓存或者删除 app, 否则会一直持有

   >  ps: 为了方便用户填写蓝牙数据后, 轻应用能够持久保存该数据, 可以使用该接口处理. 



请求调用示例:

```javascript
function putData() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_DATA",
        "putData", [{
            "app_id": "zebra",
            "key": "bt_address",
            "value": "c0:ee:fb:f6:67:bf"
        }]);
}

function getData() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_DATA",
        "getData", [{
            "app_id": "zebra",
            "key": "bt_address"
        }]);
}

```





#### putData() 

请求数据说明:

```json
{
    "app_id": "zebra", // 存储数据标志, 一个 app_id 里含有多个 key-value
    "key": "bt_address", // 存储字段 key
    "value": "c0:ee:fb:f6:67:bf"  // key对应的 value
}
```

返回数据无



#### readData()

请求数据说明:
```json
{
    "app_id": "zebra", // 存储数据标志, 一个 app_id 里含有多个 key-value
    "key": "bt_address"// 存储字段 key
}
```



返回数据说明:

```json
{
    "app_id": "zebra", // 存储数据标志, 一个 app_id 里含有多个 key-value
    "key": "bt_address", // 存储字段 key
    "value": "c0:ee:fb:f6:67:bf"  // key对应的 value
}
```



### 4. 生成重置条形码

> 重置扫描枪使用



请求调用示例:

```javascript
function generateResetBarcode() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_Zebra",
        "generateResetBarcode", []);
}
```

请求输入无



请求返回说明:

```json
{
    "result" : "\u000392"
}
```

> ps: 重置与配对的条形码, 都使用 code 128B的格式







### 5. 生成配对条形码

> 配对扫码枪使用, 其中 android 扫描后, 会自动连接,  ios 需要调用 sdk进行主动连接, 也即需要调用下面的 connect() 方法



请求调用示例:

```javascript
function generatePairBarcode() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_Zebra",
        "generatePairBarcode", [{ "bluetooth_address": "c0:ee:fb:f6:67:bf" }]);
}
```



请求参数说明:

```json
// android 才需要以下参数, 因为 android 系统原因, 部分版本无法通过代码直接获取蓝牙地址

{ 
    "bluetooth_address": "c0:ee:fb:f6:67:bf" // 蓝牙地址
}
```


请求返回说明:

```json
{
    "result" : "\u0003PH17A4404440E39F2"
}
```

> ps: 重置与配对的条形码, 都使用 code 128B的格式



### 6. 绑定事件监听器

> 连接, 断开, 扫码枪扫描出数据都通过该回调统一返回



请求调用示例:

```javascript
function zebraBindEventListener() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_Zebra",
        "bindEventListener", []);
}
```



该接口为持续监听的接口, 一但调用绑定, 只要有事件产生, 就会回调结果给调用方.

返回数据说明:

```json
{
    "event": 0,   //0: 已连接,  1: 已断开,  2: 扫码枪扫码返回结果
    "scanner_id": 2,   //来源扫码枪 id
    "result" : 
    {
    	"data": "hello world", //扫码枪扫码出来的结果
	}
}
```





### 7.  获取附近的设备列表

> 因 ios 需要手动连接扫码枪, 获取设备列表后, 根据 scanner_id,  再调用下面的 connect() 方法



请求调用示例:

```javascript
function zebraGetScannerList() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_Zebra",
        "getScannerList", []);
}
```

请求输入无

返回数据说明:

```json
[
    {
        "scanner_id" : 1, 
        "scanner_name": "XXXX"
    }
    ....
]
```





### 8. 连接扫码枪

>  根据 scanner_id 进行连接, ios平台需要调用此方法,  android 不用. 连接成功后通过bindEventListener() 中返回



请求调用示例:

```javascript
function zebraConnect() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_Zebra",
        "connect", [{ "scanner_id": 1 }]);
}
```





9. 断开连接

> 根据 scanner_id 断开连接



请求数据说明:

```javascript
function zebraDisconnect() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_Zebra",
        "disconnect", [{ "scanner_id": 1 }]);
}
```

