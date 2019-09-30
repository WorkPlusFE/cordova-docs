# OCR cordova 接口
---
### 1. 自定义扫描识别
```javascript
function getBluetoothAddress() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("失败");
        },
        "WorkPlus_OCR",
        "recognize", [
        {
        	"orientation": 0,
        	"rate": 0.5,  
        	"padding": 10, 
        	"recognize_type": 0 
        }]);
}
```

请求参数说明:


```json
{
    	"orientation": "0",//控制屏幕横屏竖屏, 0表示自动旋转, 1表示锁定竖屏, 2表示锁定横屏, 可不传, 默认为0
    	
    	"rate": 0.5,  //扫描框高:宽比例, 可不传, 默认1:1
    	
    	"padding": 10, //识别框边距, 可不传, 默认为10
    	
    	"recognize_type": 0 //后台识别类型, 具体类型见下表, 可不传, 不传则不进行识别
}
```

#### orc识别类型:

| Status | Description                        |
| ------ | ---------------------------------- |
| 0      | 文字识别                         |




返回参数说明:

```json
{
	"crop_path": "xxxx", //抠图图片返回路径
	
	"crop_img": "base64Data"// 抠图图片base64数据 
	
	"recognize_result": "xxx" //根据用户传入recognize_type, 调用后台接口返回的result(原封不动透传), 若传入recognize_type未知, 则不返回该字段
}

```


