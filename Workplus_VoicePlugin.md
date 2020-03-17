#语音相关插件(WorkPlus_Voice)
***
## 1. 开启语音听写
>语音听写具体使用哪个方案, 根据打包时App的配置而定, 提供讯飞和阿里的方案选择

请求调用示例:

```javascript
function startTalkingRecognize() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Voice",
                "startTalkingRecognize", []);
        }

说明：
请求输入数据：
暂无

请求返回数据：

{
	"code": 0, //状态码 0表示成功, 其余状态码请查询讯飞官网(https://shimo.im/sheet/w3yUy39uNKs0J7DT), App 负责原封不动把状态码返回给调用者
	"message":"hello", //当 code 为 0时, 表示识别出来的语言文字, 其他则为错误码描述
	"is_last": false,   
	"is_split": false  
	//is_last 表示是否最终的语音文字, 当是 true 时, 则表示当前语音识别为终结状态, 
	//例如连续输入语音词语后, 停止不说话一定时间(目前设为10秒), 讯飞 sdk 则会认为此次语音听写需要结束掉
	//is_split 表示返回数据是否拆词, 目前默认使用阿里云sdk, 每次返回的数据都是完整的, 后面返回的数据必定把前面的包含.
	//例如说"你好吗, 我很好", 首次回调返回"你好吗", 紧接着返回"你好吗, 我很好"
}

```

> ps: 当返回 code 为 0时, 该接口会***持续返回***语音输入的听写结果

<br/>



## 2. 取消语音听写
> 调用 startTalkingRecognize 后, 可以调用该方法终止掉语音听写

请求调用示例:

```javascript
function cancelTalkingRecognize() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Voice",
                "cancelTalkingRecognize", []);
        }


说明：
请求输入数据：
无

请求返回数据：
无


```




