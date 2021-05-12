#视频播放plugin
### 1. 播放视频 (iOS v4.11.0+)
请求调用示例

```javascript
function playVideoStream(){
            cordova.exec(
                         function(result){
                            alert(JSON.stringify(result,null,4));
                         },
                         function(error){
                            alert(JSON.stringify(error,null,4));
                         },
                         "WorkPlus_Video",
                         "playVideoStream",
                         [{
                          "url" : "https://hubei1.tourage.cn:10081/live?port=11935&app=tourage&stream=22d0f7a526c628fa&token=7a21fba2403fdd6cc85638443d909417",
                          "disableControl" : "true"
                          }]
                         );
        }
        
说明：
请求输入数据：
url: 需要播放的url地址
disableControl: 是否需要屏蔽进度拖动效果(拉流视频建议传true)
```