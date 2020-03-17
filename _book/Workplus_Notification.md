# 通知插件(WorkPlus_Notification)
---

##1. 弹出通知
>弹出通知栏

请求调用示例:

```javascript

function popNotification() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_Notification",
        "pop",
        [{
            "title": "通知标题",
            "text": "通知内容"
        }]
    );
}

```

