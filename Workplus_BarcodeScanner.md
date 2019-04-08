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
请求输入数据：
//可不传
{
	"type": "native" //扫码是否需要考虑处理内部业务, 如扫码登录pc 端, 扫码进群等, 若不传则默认只关注二维码内容, 直接返回扫码结果
}
请求返回数据：无
```


<br/>