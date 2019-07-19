###获取联系人信息插件(WorkPlus_Contact)
---
####1. 单选联系人(2.0接口, 3.0做了兼容)
>打开**当前组织**的联系人列表，单选一个联系人(兼容2.0数据)
>

请求调用示例:

```javascript
function getContact(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "getContact", 
        []);
}

说明：
请求输入数据（也可以不输入数据，默认显示选择自己）：
[{
	"hideMe":"true",  // 表示在选择联系人的时候，是否包括显示选择自己
	//true表示不显示自己，false表示显示自己
	
	"filterSenior":1
	//1 表示过滤高管, 0 表示不过滤
	
}] 

请求返回数据：数据列表（选择的雇员）
[{
	"identifier":"雇员id",
	"accountName":"雇员username",
	"tenantId":"雇员domainId",
	"post":"雇员职位信息",
	"job_title":"雇员职位信息",	
	"org_name":"雇员所属机构",
	"com_name":"雇员所属公司",
	
	//---- 以上为2.0的字段, 接口做了兼容, 3.0用户可以忽略 ----
	
	"user_id":"雇员id",
	"domain_id":"域id",
	"username":"雇员username",
	"name":"雇员name",
	"userId":"雇员id",
	"domainId", "雇员domainId",
	"avatar":"雇员头像",
	"mobile":"雇员电话号码",
	"email":"雇员email",
	"gender":"雇员性别",
	"firstNameLetter":"雇员的简拼",
	"status":"雇员激活状态",
	"sort":"雇员排序号",
	"post":"雇员职位信息",
	"jobTitle":"雇员职位信息",
	"orgName":"雇员所属机构",
	"corpName":"雇员所属公司",
	"positions":[{职位信息详情..}]
	
}]

```

####2. 多选联系人列表(2.0接口, 3.0做了兼容)
>打开**当前组织**的联系人列表，选择多个联系人(兼容2.0数据)
>

请求调用示例:

```javascript
function getContacts(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "getContacts", 
        []);
}

说明：
请求输入数据(可无)：
[{
	"selectedContacts":[
	//用户回传过来的雇员列表信息
	{
	"identifier":"雇员id",
	"accountName":"雇员username",
	"tenantId":"雇员domainId",
	"post":"雇员职位信息",
	"job_title":"雇员职位信息",	
	"org_name":"雇员所属机构",
	"com_name":"雇员所属公司",
	
	---- 以上为2.0的字段, 接口做了兼容, 3.0用户可以忽略 ----
	
	"user_id":"雇员id",
	"domain_id":"域id",
	"username":"雇员username",
	"name":"雇员name",
	"userId":"雇员id",
	"domainId", "雇员domainId",
	"avatar":"雇员头像",
	"mobile":"雇员电话号码",
	"email":"雇员email",
	"gender":"雇员性别",
	"firstNameLetter":"雇员的简拼",
	"status":"雇员激活状态",
	"sort":"雇员排序号",
	"post":"雇员职位信息",
	"jobTitle":"雇员职位信息",
	"orgName":"雇员所属机构",
	"corpName":"雇员所属公司",
	"positions":[{职位信息详情..}]
	
	}
	...
	],
	"hideMe" : "true", // 表示在选择联系人的时候，是否包括显示选择自己
	
	"filterSenior":1
	//1 表示过滤高管, 0 表示不过滤
}]
请求返回数据：用户选择的雇员的数据列表
[{
	"identifier":"雇员id",
	"accountName":"雇员username",
	"tenantId":"雇员domainId",
	"post":"雇员职位信息",
	"job_title":"雇员职位信息",	
	"org_name":"雇员所属机构",
	"com_name":"雇员所属公司",
	
	---- 以上为2.0的字段, 接口做了兼容, 3.0用户可以忽略 ----
	
	"user_id":"雇员id",
	"domain_id":"域id",
	"username":"雇员username",
	"name":"雇员name",
	"userId":"雇员id",
	"domainId", "雇员domainId",
	"avatar":"雇员头像",
	"mobile":"雇员电话号码",
	"email":"雇员email",
	"gender":"雇员性别",
	"firstNameLetter":"雇员的简拼",
	"status":"雇员激活状态",
	"sort":"雇员排序号",
	"post":"雇员职位信息",
	"jobTitle":"雇员职位信息",
	"orgName":"雇员所属机构",
	"corpName":"雇员所属公司",
	"positions":[{职位信息详情..}]
	
},
{
	...
},
...
]

```


####3. 多选当前组织的雇员列表
>打开**当前组织**的联系人列表，选择多个联系人
>

请求调用示例:

```javascript
function getEmployeesFromCurrentOrg(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "getEmployeesFromCurrentOrg", 
        []);
}

说明：
请求输入数据(可无)：
[{
	"selectedEmpList":[
	//用户回传过来的雇员列表信息
	{
		"username":"雇员username",
		"name":"雇员name",
		"domainId":"雇员domainId",
		"userId":"雇员id",
		"avatar":"雇员头像",
		"mobile":"雇员电话号码",
		"email":"雇员email",
		"gender":"雇员性别",
		"firstNameLetter":"雇员的简拼",
		"status":"雇员激活状态",
		"sort":"雇员排序号",
		"post":"雇员职位信息",
		"jobTitle":"雇员职位信息",
		"orgName":"雇员所属机构"
	}
	...
	],
	"hideMe" : "true", // 表示在选择联系人的时候，是否包括显示选择自己
	"filterSenior":1
	//1 表示过滤高管, 0 表示不过滤
}]
请求返回数据：用户选择的雇员的数据列表
[{
	"username":"雇员username",
	"name":"雇员name",
	"domainId":"雇员domainId",
	"userId":"雇员id",
	"avatar":"雇员头像",
	"mobile":"雇员电话号码",
	"email":"雇员email",
	"gender":"雇员性别",
	"firstNameLetter":"雇员的简拼",
	"status":"雇员激活状态",
	"sort":"雇员排序号",
	"post":"雇员职位信息",
	"jobTitle":"雇员职位信息",
	"orgName":"雇员所属机构"
},
{
	...
},
...
]

```

####4. 获取当前登录用户详情
>获取当前登录用户详细信息(包括某个组织下的雇员信息, 开发者传参决定)
>

请求调用示例:

```javascript
function getCurrentUserInfo(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "getCurrentUserInfo", 
        []);
}

说明：
请求输入数据(可无, 默认返回数据会带上雇员信息)：
[
    {
        "needEmpInfo": true //返回用户资料是否带上当前组织的雇员信息
    }
] 

请求返回数据：
{
    "user_id": "用户id",
    "domain_id": "域id",
    "username": "用户名",
    "name": "用户名字",
    "nickname": "用户昵称",
    "initial": "用户简拼",
    "avatar": "用户头像",
    "phone": "用户电话",
    "email": "用户邮箱",
    "gender": "用户性别",
    "birthday": "用户生日",
    "status": "用户状态",
    "first_letter": "用户首字母",
    "more_info": "更多信息",
    "employee": {
        "domain_id": "域id",
        "org_code": "组织id",
        "employee_type_id": "雇员类型id",
        "employee_type": "雇员类型",
        "id": "雇员id",
        "name": "雇员名",
        "avatar": "雇员头像",
        "status": "雇员状态",
        "type": "类型",
        "sort_order": "排序",
        "user_id": "用户id",
        "senior": "是否高管",
        "nickname": "昵称",
        "username": "用户username",
        "display_name": "显示名称",
        "gender": "昵称",
        "pinyin": "拼音",
        "initial": "简拼",
        "mobile": "电话",
        "created": "创建日期",
        "last_modified": "最后修改时间",
        "expired": "过期时间",
        "disabled": "是否不可用",
        "positions": "职位",
        "more_info": "更多信息",
        "settings": "设置信息",
        "properties": "properties属性列表",
        "data_schemas": "dataSchema对应properties值",
        "industry": "行业",
        "email": "邮箱",
        "sn": "工号",
        "label": "显示值",
        "region": "区（比如广东省）",
        "location": "地区（比如广州市）",
        "other_email": "其他邮箱",
        "other_phone": "其他电话",
        "work_phone": "工作电话",
        "fax": "传真",
        "tel": "电话",
        "birthday": "生日"
    }
}

```


####5. 返回当前用户的雇员信息
>获取当前登录用户的某个组织里的雇员信息
>

请求调用示例:

```javascript
function getCurrentEmployeeInfo(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "getCurrentEmployeeInfo", 
        []);
}

说明：
请求输入数据(可无, 默认返回当前组织的雇员):
[
    {
        "orgCode": "xxx" //表示返回该组织的雇员信息
    }
]
请求返回数据：
{
	"username":"雇员username",
	"name":"雇员name",
	"tenantId":"雇员domainId",
	"userId":"雇员id",
	"avatar":"雇员头像",
	"mobile":"雇员电话号码",
	"email":"雇员email",
	"gender":"雇员性别",
	"firstNameLetter":"雇员的简拼",
	"status":"雇员激活状态",
	"sort":"雇员排序号",
	"post":"雇员职位信息",
	"jobTitle":"雇员职位信息",
	"orgName":"雇员所属机构"
}
```


####6. 显示与该用户的聊天页面
>轻应用输入userId，domianId, 跳转到workplus与该用户的聊天页面
>

请求调用示例:

```javascript
function showUserChatViewByUser(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "showUserChatViewByUser", 
        [
        	{
        	 "userId":"xxx",
        	 "domainId":"xxx"
        	} 
        ]);
}

说明：
请求输入数据：
[
	{
		"userId":"xxx",
		"domainId":"xxx"
	}， 
]
请求返回数据：无
```

####7. 获取手机通讯录里面的联系人列表
>获取手机通讯录联系人的列表
>

请求调用示例:

```javascript
function getMobileContacts(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "getMobileContacts", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"a":{"name":"allin(联系人名称)", "tel":"123456(联系方式)"}
	"b":[{"name":"ball(联系人名称)", "tel":"135xxx(联系方式)"},
		 {"name":"boy(联系人名称)", tel:"137xxx(联系方式)"}, 
		 ...],
	...
}
```


####8. 根据用户id获取用户信息
>通过用户域id和用户id获取这个用户的详细信息
>

请求调用示例:

```javascript
function getUserInfoByUserId(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "getUserInfoByUserId", 
        [{
        	"user_id":"用户id",
        	"domain_id":"用户域id"
        }]);
}

说明：
请求输入数据：
[{
	"user_id":"用户id",
	"domain_id":"用户域id"
 }]
请求返回数据：
{
    "user_id": "用户id",
    "domain_id": "域id",
    "username": "用户名",
    "name": "用户名字",
    "nickname": "用户昵称",
    "initial": "用户简拼",
    "avatar": "用户头像",
    "phone": "用户电话",
    "email": "用户邮箱",
    "gender": "用户性别",
    "birthday": "用户生日",
    "status": "用户状态",
    "first_letter": "用户首字母",
    "more_info": "更多信息"
}
```

<br/>

####9. 根据用户username展示用户详情页面
>通过用户username展示这个用户的详情页面
>

请求调用示例:

```javascript
function showUserInfoByUsername(){

        cordova.exec(function(result) {
                alert(JSON.stringify(result, null, 4));
        },
        function(error) {
        alert("调用失败");
        },
        "WorkPlus_Contact",
        "showUserInfoByUsername", [{
        "username": "15918723567"
        }]);

        }

说明：
请求输入数据：
[{
        "username": "15918723567"
        }]
请求返回数据：
无
```

<br/>

####10. 根据群组id打开群组聊天页面（WorkPlus版本3.1.4以上版本使用）
>通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
>

请求调用示例:

```javascript
function openDiscussionById(){
        cordova.exec(function(result) {
                alert(JSON.stringify(result, null, 4));
        },
        function(error) {
                alert(JSON.stringify(error, null, 4));

        },
        "WorkPlus_Contact",
        "openDiscussionById", [{
            "discussionId": "0629aad170784c9e810985c443fb0bd6",
            "body_type" : "SHARE",
            "body" : {
                "display_avatar":"***",
                "share_type":"LINK",
                "share_message": {
                    "avatar":"http://www.icon",
                    "digest":"这里显示摘要",
                    "url":"www.baidu.com"
                }
            }
        }]);
        }

说明：
请求输入数据：
[{
	"discussionId":"群组id"
 }]
请求返回数据：
无
```

<br/>

####11. 调用组织选人页面，选人创建群组（WorkPlus版本3.1.4以上版本使用）
>通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
>

请求调用示例:

```javascript
function createDiscussionChat(){
        cordova.exec(function(result) {
                alert(JSON.stringify(result, null, 4));
        },
        function(error) {
                alert(JSON.stringify(error, null, 4));

        },
        "WorkPlus_Contact",
        "createDiscussionChat", []);
        }


说明：
请求输入数据：无
请求返回数据：

```

<br/>

####12. 打开应用聊天界面（WorkPlus版本3.4.1以上版本使用）
>通过应用id和orgI的，打开改组织下某个应用聊天界面
>

请求调用示例:

```javascript
function showAppChatViewById() {

            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));

            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Contact",
                "showAppChatView", [{
                    "app_id": "eb66ba3d-1d83-4104-8119-c6fc3b12cdca",
                    "domain_id": "atwork",
                    "org_id":"37a2ef9f-8683-4369-ae7b-121cea149d05",
                    "session_type":"service"
                }]);

        }

说明：
domain_id为当前应用所在域的id
org_id为当前应用所在组织的id
app_id为当前应用的id
session_type为当前应用的类型：主要类型有[service / lightApp ],按其类型填入上述值即可
service为app是服务号，lightApp为当前应用是轻应用
请求输入数据：
 "app_id": "eb66ba3d-1d83-4104-8119-c6fc3b12cdca",
 "domain_id": "atwork",
 "org_id":"37a2ef9f-8683-4369-ae7b-121cea149d05",
 "session_type":"service"
请求返回数据：

```

<br/>

####13. 打开搜索页面（WorkPlus版本3.4.1以上版本使用）


请求调用示例:

```javascript
function searchInApp() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert(JSON.stringify(error, null, 4));

                },
                "WorkPlus_Contact",
                "searchInApp", []);
        }
请求返回数据：

```

<br/>

####14. 打开App列表页面（WorkPlus版本3.4.1以上版本使用）
>根据组织id打开该组织下的应用列表页面

请求调用示例:

```javascript
function showAppListById() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_AppStore",
                "showAppListById",
                [{ "org_id": "37a2ef9f-8683-4369-ae7b-121cea149d05"}]
            );
        }
请求输入数据：

 "org_id":"37a2ef9f-8683-4369-ae7b-121cea149d05",
org_id为需要显示应用列表的组织id，如果用户不填，我们将自动打开当前用户默认组织下的应用列表

```

<br/>


####15. 打开通用选择人员界面, 多选用户或者雇员（WorkPlus版本3.6.0以上版本使用）
>区别于接口: 1. getContact 2. getContacts  3. getEmployeesFromCurrentOrg, 该接口打开通用的选择界面,此界面能选择组织内的雇员信息, 用户的星标联系人等

请求调用示例:

```javascript
function selectContacts() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Contact",
                "selectContacts",
                []
            );
        }

请求输入数据:
 [
 {
 	"filterSenior": 1,
 	//1 表示过滤高管, 0 表示不过滤,默认为 1,
 	"maxCount" : 10
 	//选人最大数量, 最小为1, 默认不限制数量
 }
 ]      

请求返回数据：

{
	"user":[{...}, {...}],
	"employee": [{...}, {...}]
}
//具体模型字段参照 1. getEmployeesFromCurrentOrg

```

<br/>



####16. 群组选人界面（WorkPlus版本3.6.0以上版本使用）
>根据群组 id, 打开群组成员界面, 并进行选择

请求调用示例:

```javascript
function selectDiscussionMembers() {
    cordova.exec(function (result) {
        alert(JSON.stringify(result, null, 4));
    },
        function (error) {
            alert("调用失败");
        },
        "WorkPlus_Contact",
        "selectDiscussionMembers",
        [{
            "discussion_id": "7e41cf3691344b28a9dd2035bac47477",
            "members_selected": []
        }
        ]
    );
}

请求输入数据:
{
	"discussion_id": "7e41cf3691344b28a9dd2035bac47477", //群组 id
	"members_selected": [
		{接口返回来的返回来的 User 数据},
		{接口返回来的返回来的 User 数据}
	] 
}   

请求返回数据：

{
	"members": [
		{},{}...
	]
}


```

<br/>



