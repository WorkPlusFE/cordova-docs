# 邮箱接口(WorkPlus_Email)
---
## 1. 写邮件
>跳转到写邮件的页面

请求调用示例:

```javascript
function writeEmail() {
    cordova.exec(function (result) {
        alert(result);
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_Email",
        "writeEmail", [
            {
                "emails": "xxx.163.com,xxx.foreverht.com" 
            }
        ]);
}


```

请求数据说明:

```json
{
    "emails": "xxx.163.com,xxx.foreverht.com" //发送邮箱地址, 支持多地址, 使用","分割
}
```





## 2. 打开邮箱
>跳转到我的邮箱（未登陆就跳转到登陆页）


请求调用示例:

```javascript
function openEmail() {
    cordova.exec(function (result) {
        alert(result);
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_Email",
        "openEmail", []);
}
```