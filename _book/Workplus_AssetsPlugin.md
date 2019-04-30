# 钱包功能相关接口(WorkPlus_Assets)

---
## 1. 获取钱包设置
>货币名称等信息

请求调用示例:

```javascript
function getAssetSettings() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Assets",
                "getSettings",
                []
            );
        }
            
 说明:


请求返回数据:
{
    "assets_enabled": true,
    "cn_name": "金币", //货币中文名称
    "en_name": "gold_coin",  //货币英文名称
    "to_fortunes_enabled": true,
    "integration_unit": 1,
    "to_fortunes_unit": 1
}

```



## 2. 打开红包详情页面
>根据红包 id 跳转红包详情

请求调用示例:

```javascript
function getRedEnvelopeDetail() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Assets",
                "routeRedEnvelopeDetail",
                [{"transaction_id" : "4451b567-1a22-4a35-901d-8411349fde4e"}]
            );
        }
            
 说明:
 请求输入数据: 
 [{
     "transaction_id" : "4451b567-1a22-4a35-901d-8411349fde4e" //红包交易 id
 }]

```





## 3. 转账功能
> 吊起支付输入密码界面, 输入完成后执行转账请求

请求调用示例:
```javascript
function makeTransaction() {
            cordova.exec(function(result) {
                         alert(result);
                         },
                         function(error) {
                         alert("转帐失败");
                         },
                         "WorkPlus_Assets",
                         "transactions",[
                         {
                                   "user_id":"cc9605e8f9ef46f59c92fc46c6ec6252",
                                   "type":"TRANSFER",
                                   "sub_type":"",
                                   "amount":1000,
                                   "remark":"测试",
                                   "display_name": "不告诉你"
                         }
                         ]);
        }

        
 说明:
 请求输入数据:
 display_name 为输入支付密码时, 显示的收账人名字,其余参数请参考 api 文档, 该接口负责把参数.
 
 请求返回数据:
 
 如果API请求响应为200，则cordova返回正确，非200，则返回失败；
 但转帐的具体业务上是否成功或失败（比如，余额不足) ，需要调用方自行判断.(返回数据原封不动回调给 cordova 调用方)
       
``` 




一个可参考的响应成功:

```json
{
    "status": 0,
    "message": "Everything is ok.",
    "result": {
        "id": "70c84958-4c76-49e9-8b5e-938ff4ebfb52",
        "bill_no": "SR201806121625340772000005328",
        "domain_id": "atwork",
        "user_id": "111",
        "username": "internal1",
        "name": "ÕË»§1",
        "status": "FINISHED",
        "type": "TRANSFER",
        "type_name": "×ªÕË",
        "amount": -10,
        "surpluses": 70,
        "more_info": {
        },
        "remark": "",
        "serial_no": "transfer-001",
        "subsystem_no": "",
        "create_time": 1528791934773,
        "modify_time": 1528791934773,
        "operator": {
            "domain_id": "atwork",
            "user_id": "111",
            "username": "internal1",
            "name": "ÕË»§1"
        },
        "optimum": false,
        "surplus_num": 0,
        "surplus_money": 0,
        "money": -10
    }
}
```

