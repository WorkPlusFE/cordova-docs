# 组织相关接口(WorkPlus_Org)

---
## 1. 获取当前组织信息
请求调用示例:

```javascript

function getCurrentOrg() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));

    },
        function (error) {
            alert("调用失败:" + error);
        },
        "WorkPlus_Org",
        "getCurrentOrg", []);
}

说明：
请求输入数据：
无


请求返回数据：
{
  "id": "xx",
  "domain_id": "xxxx",
  "org_code": "xxx",
  "name": "xxx",
  "en_name": "xxxx",
  "tw_name": "xxxx",
  "logo": "xxxx",
  ....
}

```



## 2. 弹出切换组织选择框

请求调用示例:

```javascript

function popSwitchOrg() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("调用失败:" + error);
        },
        "WorkPlus_Org",
        "popSwitchOrg", []);
}


说明：
请求输入数据：
无




请求返回数据：
数据：
{
  "id": "xx",
  "domain_id": "xxxx",
  "org_code": "xxx",
  "name": "xxx",
  "en_name": "xxxx",
  "tw_name": "xxxx",
  "logo": "xxxx",
  ..
 }
 
 ```