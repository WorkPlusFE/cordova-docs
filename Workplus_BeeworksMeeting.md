# 蜂巢会议Cordova接口（WorkPlus_ZoomMeeting）

---
## 一、打开原生界面再去发起对应的会议（Workplus4.10.0版本以上使用）
### 1、打开原生发起、加入、预约会议界面

```javascript
function startNativeMeeting() {
                cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
                },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_ZoomMeeting",
                "openNativeMeeting",
                [{
                	"type"     : 1,
                	"org_code" : "组织code"
                }]
                );
}

请求返回数据:
{
    "result" : 0 //0表示调用 zoommeeting 接口成功, -1：表示失败
    "message" : "提示消息"
}
```
|**参数名**|**值**|**备注**|
|:----|:----|:----|
|org_code|组织code|有则传|
|type|1：发起会议  2: 加入会议 3: 预约会议|**必传**|


## 二、不经过原生，直接进入zoom会议里面（Workplus4.10.0版本以上使用）

### 2.1、加入会议

```javascript
function joinMeeting() {
	cordova.exec(function (result) {
		alert(JSON.stringify(result, null, 4));
	},
	function (error) {
		alert("调用失败");
	},
	"WorkPlus_ZoomMeeting",
	"joinMeeting",
	[{
		"org_code" : "组织code",
		"token"    : "zoom后台登录返回的token",
		"meeting_id": "会议id",
		"meeting_no": "会议号"
	}]
	);
}

请求返回数据:
{
    "result" : 0 //0表示调用 zoommeeting 接口成功
    "message" : "提示消息"
}

```

|**参数名**|**值**|**备注**|
|:----|:----|:----|
|org_code|组织code|有则传|
|token|a634bf4412904e37ba32f903dba[0|**必传**|
|meeting_id|会议id|**必传**|
|meeting_no|会议号|**必传**|


### 2.2、再次发起会议

```javascript
function startMeeting() {
	cordova.exec(function (result) {
		alert(JSON.stringify(result, null, 4));
	},
	function (error) {
		alert("调用失败");
	},
	"WorkPlus_ZoomMeeting",
	"startMeeting",
	[{
		"org_code" : "组织code",
		"topic"    : "xxx发起的测试会议",
		"capacity" : 10,
		"participants" : [{
			"participantId":"",
			"participantName":"",
			"participantAccount":""
		},
		{
			"participant_id":"",
			"participant_name":"",
			"participant_account":""
		}]
	}]
	);
}

请求返回数据:
{
    "result" : 0 //0表示调用 zoommeeting 接口成功
    "message" : "提示消息"
}
```
|**参数名**|**值**|**备注**|
|:----|:----|:----|
|org_code|组织code|有则传|
|topic|会议主题|必传|
|capacity|方数|必传|
|participants|List|必传  参与人列表|
|participant_id|用户id||
|participant_name|用户名||
|participant_account|用户帐号||


### 2.3、分享会议

```javascript

function shareMeeting() {
	cordova.exec(function (result) {
		alert(JSON.stringify(result, null, 4));
	},
	function (error) {
		alert("调用失败");
	},
	"WorkPlus_ZoomMeeting",
	"shareMeeting",
	[{
		"org_code"  : "组织code"
		"meeting_id": "会议id",
		"meeting_no": "会议号",
		"meeting_name": "会议名称",
		"copy_text" : "复制会议文本",
		"outer_url" : "分享到外部地址",
		"inner_url" : "分享到内部的地址"
	}]
	);
}

请求返回数据:
{
    "result" : 0 //0表示调用 zoommeeting 接口成功, 其他状态码具体参考后台接口文档
}
```

|**参数名**|**值**|**备注**|
|:----|:----|:----|
|org_code|组织code|有则传|
|meeting_name|会议名称|**必传**|
|meeting_id|会议id|**必传**|
|meeting_no|会议号|**必传**|
|copy_text|复制文案|**必传**|
|outer_url|分享到外部地址|**必传**|
|inner_url|分享到内部地址|**必传**|

### 2.4、邀请入会

```javascript
function inviteMeeting() {
    cordova.exec(function (result) {
    	alert(JSON.stringify(result, null, 4));
    },
    function (error) {
    	alert("调用失败");
    },
    "WorkPlus_ZoomMeeting",
	"inviteMeeting",
    [{
    	"org_code"  : "组织code",
    	"meeting_id": "会议id",
    	"meeting_no": "会议号",
    	"outer_url" : "分享到外部地址",
    	"inner_url" : "分享到内部的地址"
	}]
	);
}
 
请求返回数据:
{
    "result" : 0 //0表示调用 zoommeeting 接口成功, 其他状态码具体参考 赐飞 接口文档 
}
```
|**参数名**|**值**|**备注**|
|:----|:----|:----|
|org_code|组织code|有则传|
|meeting_id|会议id|**必传**|
|meeting_no|会议号|**必传**|
|outer_url|分享到外部地址|**必传**|
|inner_url|分享到内部地址|**必传**|


