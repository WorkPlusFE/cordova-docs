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
            "WorkPlus_AudioAndVideo",
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
                "startVideoRecoder",[{
                      "duration":"60.0",
                      "quality":"0"
                 }]
            );
    }

说明：
请求输入数据：
"duration" : 视频录制最大录制时长,单位秒(默认为10秒)
"quality"  : 视频录制清晰度, "0" > 高清; "1" > 一般; "2" > 流畅(默认为一般)

请求返回数据：
{
"code": 0,
"message": "视频录制成功",
"info": {
    "video_path": "",
    "video_duration": "",
    "video_size":"", // 返回视频大小，单位是K
    "video_thumbnail":"" //首帧图片base64数据
    }
}
```
##3. 音频转mp3格式
>

请求调用示例:

```javascript
    function translateAudio(){

        cordova.exec(
            function(result){
                    alert(JSON.stringify(result,null,4));
                },
                function(error){
                    alert(JSON.stringify(error,null,4));
                },
                "WorkPlus_AudioAndVideo",
                "translateAudio", [{"file_path": "/storage/emulated/0/workplus-hcbmtest/USER/uf087758/AUDIO/3cd38f75-c2e7-41ac-bb19-1c76907af968.amr"}]
            );
    }

说明：
请求输入数据：

请求返回数据：
{
"code": 0,
"message": "音频转换成功",
"info": {
    "video_path": "xxx",
    }
}
```
