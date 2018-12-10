# 网络连接信息(WorkPlus_NetInfo)
---

## 1. 获取当前连接Wifi信息
>获取当前连接Wifi信息, 包括 bssid, 名字等

请求调用示例:

```javascript
function getWifiInfo() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_NetInfo",
                "getWifiInfo",
                []
            );
        }

说明：


请求返回数据：
{
	"bssid" : "xxxx",  //wifi 接入点标识
	"name" : "foss-mobile",  //wifi 名称
}	
```