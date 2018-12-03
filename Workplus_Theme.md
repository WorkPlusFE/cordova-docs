### 换肤主题(WorkPlus_Theme)
---
#### 1. 更新皮肤
>更新对应组织的皮肤包,若该组织是当前组织,则马上显示更换效果

请求调用示例:

```javascript
function changeTheme(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Theme",
        "changeTheme", 
        [{"orgCode" : "xxx", "theme" : "xxx"}]
        );
}

说明：
请求输入数据：
[
    {
        "orgCode": "xxx",
        "theme": "xxx"
    }
]

theme表示主题名称, 暂时系统提供如下8种:

skyblue           天空清澈蓝
businessblue      商务蓝
shakin            耀沙金
glacierblue       冰川蓝
chinared          中国红
blackjadegreen    墨玉绿
bluestars         繁星蓝
vibrantorange     活力珠光橙

请求返回数据：无	
```