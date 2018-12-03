### 扫描二维码插件(WorkPlus_BarcodeScanner）
***
>调用相机扫描二维码

请求调用示例:

```javascript
function scanner(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_BarcodeScanner",
        "scanner", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：无
```


<br/>