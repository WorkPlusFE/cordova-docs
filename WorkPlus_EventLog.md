# 事件日志接口(WorkPlus_EventLog)
---

## 1. 获取当前登陆用户今天在线时长
请求调用示例:

```javascript
function getTodayUseDuration() {
    cordova.exec(function (result) {
        alert(result);
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_EventLog",
        "getTodayUseDuration", []);
}


```

返回数据说明:

```json
{
    "duration": 23764 //毫秒单位, 当天使用时长
}
```





## 2. 获取事件日志数据
>根据传参条件, 返回对应的事件日志数据. 


请求调用示例:

```javascript
function getEventLogs() {
    cordova.exec(function (result) {
        alert(result);
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_EventLog",
        "getEventLogs", [
                {
                    "type": "LOCAL_EMAIL_LOGIN_CLICK",
                    "from": 1543818810000,
                    "to": 1543818811000
                }

        ]);
}
```

请求数据说明:

```json
{
    "type": "LOCAL_EMAIL_LOGIN_CLICK", 	//日志类型, 具体定义见下表
    "from": 1543818815000,
    "to": 1543818811000  
    //根据 from 与 to 返回指定时间内的日志, from 与 to 不传, 或小于0时, 则去除对应的条件, 
    //例如from: -1, to: 1543818811000, 则查询小于1543818811000时间的日志
}
```



Type定义:

| TYPE                    | 定义                                                       |
| ----------------------- | ---------------------------------------------------------- |
| LOCAL_EMAIL_LOGIN_CLICK | 本地日志, 是否打开过邮箱（未登陆的不算), 只保留1个月的数据 |
| LOCAL_EMAIL_WRITE       | 本地日志, 是否有使用邮箱发送过邮件, 只保留1个月的数据      |



返回数据说明:

返回数据为 app 本地满足条件返回的数据, 格式与`日志行为业务`一致

```json
{
    "logs": [
        {
            "begin": 1543819565088,
            "build_no": "1301",
            "bundle": "com.foreverht.workplus.test",
            "client_domain_id": "atwork",
            "client_id": "default",
            "client_name": "WorkPlus测试",
            "type": "LOCAL_EMAIL_LOGIN_CLICK"
    	....
	}
        ....
        
    ]
}
```