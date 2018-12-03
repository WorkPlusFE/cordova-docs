### Umeeting 会议相关接口(WorkPlus_Umeeting)
---
#### 1. 开启会议
>Umeeting 开启会议

请求调用示例:

```javascript
function startMeeting() {
                cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
                },
                    function (error) {
                        alert("调用失败");
                    },
                    "WorkPlus_Umeeting",
                    "startMeeting",
                    [{
                        "user_id": "xxxx", 
                        "zoom_token": "xxxx", 
                        "user_type": 99, 
                        "display_name": "dasynsy", 
                        "meeting_id": "18820274107"
                    }]
                );
            }
            
 说明:
 请求输入数据: 
 [{
     "user_id": "xxxx", 
     "zoom_token": "xxxx", 
     "user_type": 99, 
     "display_name": "dasynsy", //昵称
     "meeting_id": "18820274107"//会议号
 }]

请求返回数据:
{
  "result" : 0 //0表示调用 umeeting 接口成功, 其他状态码具体参考 umeeting 开发文档 
}
 
 user_type 为会议类型, umeeting启动会议所需要参数, 可不传, 默认是99(USER_TYPE_API_USER), 总共有以下三种类型(详情可参考 umeeting 开发文档):
 int USER_TYPE_API_USER = 99;
 int USER_TYPE_ZOOM = 100;
 int USER_TYPE_SSO = 101;
```



#### 2. 加入会议
>Umeeting 加入会议
>请求调用示例:

```javascript
function joinMeeting() {
                cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
                },
                    function (error) {
                        alert("调用失败");
                    },
                    "WorkPlus_Umeeting",
                    "joinMeeting",
                    [{
                        "display_name": "dasynsy",
                        "meeting_id": "18820274107"
                    }]
                );
            }
            
 说明:
 请求输入数据: 
 [{
     "display_name": "dasynsy", //昵称
     "meeting_id": "18820274107"  //会议号
 }]
 请求返回数据:
{
  "result" : 0 //0表示调用 umeeting 接口成功, 其他状态码具体参考 umeeting 开发文档 
}
```