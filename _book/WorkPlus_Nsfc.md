### 科委文献相关定制接口(WorkPlus_Nsfc)
---
#### 1. 打开文档详情, 并有"加入手稿功能"
>界面右上角有"加入手稿"按钮

请求调用示例:

```javascript
function readNsfcPaperFile() {
    cordova.exec(function (result) {
        alert(result);
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_Nsfc",
        "readNsfcPaperFile", [
            {
                "paper_id": "abc",
                "author": "尾田荣一郎",
                "title": "第903话",
                "journal_name": "海贼王",
                "path": "xxx"   //文件路径
            }

        ]);
}



```
