# app native 支付(WorkPlus_Pay)
---

## 1. 微信支付
>提供微信支付的能力

请求调用示例:

```javascript
cordova.exec(function(result) {
    alert(JSON.stringify(result, null, 4));
},
function(error) {
    alert("调用失败:" + error);
},
"Workplus_Pay", 
"wxPay", 
[{"app_id": "abcd",
  "request_data": "xxxx"
}]);


说明：
请求参数 :
{
	"app_id":"abcd",// sdk appId
	"request_data": "xxxx" //sdk请求所需要参数, 包括具体商户 id, 金额, 数据加密等, 格式参考微信文档PayReq类
		
}

返回参数:
{
	"code": "xxx",   //微信支付回调结果
	"message":"xxx"  //结果描述
}
```