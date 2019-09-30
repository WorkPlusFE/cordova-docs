# 语音和视频录制插件
---
##1. 语音录制
>

请求调用示例:

```javascript
    function voiceRecord(){
        cordova.exec(
            function(result) {
                alert(result.message);
            },
            function(error) {
                alert("失败");
            },
            "WorkPlus_WebView",
            "voiceRecord",[]
        );
    }

说明：
请求输入数据：无
请求返回数据：
{
    "code": 0,
    "message": "语音录制成功",
    "info": {
        "voice_path": ""
    }
}
```

##2. 视频录制
>

请求调用示例:

```javascript
    function startVideoRecoder(){

        cordova.exec(
            function(result){
                    alert(JSON.stringify(result,null,4));
                },
                function(error){
                    alert(JSON.stringify(error,null,4));
                },
                "WorkPlus_AudioAndVideo",
                "startVideoRecoder",[]
            );
    }

说明：
请求输入数据：

请求返回数据：
{
"code": 0,
"message": "视频录制成功",
"info": {
    "video_path": "",
    "video_duration": "",
    "video_size":"" // 返回视频大小，单位是K
    }
}
```

