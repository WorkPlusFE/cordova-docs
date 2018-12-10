# 广东智慧食药监定义的相关插件调用(WorkPlus_NetCa)
---

##1. 获取常用应用列表（最多8个）
>传入组织id，如果不传，默认当前组织下的常用应用

请求调用示例:

```javascript
function getCommonApps() {
            cordova.exec(function (result) {
            alert(JSON.stringify(result, null, 4));
                <!--alert(result[0].app_name);-->
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_NetCa",
                "getCommonApps",
                [{"orgId", "xxxxx"}]
            );
        }

说明：
请求输入数据：[{"orgId":"获取该组织下的常用应用列表"}]
如果不填，当默认为当前组织下的常用应用列表：即[{}]
请求返回数据：
[
  {
    "access_endpoints": {
      "MOBILE": "http://www.baidu.com"//该应用在移动端打开的链接
    },
    "screen_mode": "DEFAULT"//屏幕是否显示全屏，DEFAULT:非全屏，FULL_SCREEN:全屏,
    "show_mode": "VERTICAL"//屏幕显示方向，VERTICAL竖屏 HORIZATAL横屏,
    "app_create_time": 0,//创建时间
    "app_distribute_mode": "Enforce"//该应用是否强制安装 Enforce强制安装， NoEnforce 非强制安装,
    "app_id": "8162e222-213f-41e0-a84f-6b5f53d679ac"//应用ID,
    "app_initial": "csyy"//应用简拼,
    "app_intro": "测试"//应用简介,
    "app_kind": "LightApp"//应用类型 LightApp为轻应用，Service为服务号，NativeApp为原生应用,
    "app_name": "测试应用"//app名称,
    "app_pinyin": "ceshiyingyong"//app拼音,
    "app_recommend_mode": "Recommend"//app推荐 Recommend为推荐应用，NoRecommend为非推荐应用,
    "app_refresh_time": 1515574637830,
    "app_sort": 999//app排序,
    "app_type": "Access"//app访问应用，Access为访问应用，Admin为管理应用，用于区分普通用户的应用和管理员用户的应用,
    "bundles": [
      {
        "access_endpoints": {
          "MOBILE": "http://www.baidu.com"//应用移动端显示链接
        },
        "admin_endpoints": {},
        "bundle_id": "8b0d080b-812a-4009-bb55-205050c810ca"//应用包id,
        "bundle_params": {}//应用包传参，key-value模式,
        "bundle_version": "1"//应用包版本,
        "icon": "Z3JvdXAxL00wMC8wMC8wMC9DZ0RoWkZwVjFWaUFmeV9lQUFBSW5xUUpET3M2NzAucG5n"//应用头像id,
        
    ],
    "category_create_time": 0,
    "category_id": "e5bd0712-a377-4a9a-a65d-b90aaeb8a3c2"//应用归属类别id,
    "category_name": "轻应用"//应用归属类别名称,
    "category_sort": 999,//类别排序
    "mClickedCount": 0 ,//点击次数
    "domain_id": "gdyjjtest"//应用所在域id,
    "app_hide_mode": 0,//应用是否隐藏
    "org_id": "94d79f65-2ce8-4046-9b18-f1e93efda974"//应用组织id
  },
  。。。。
]
```


##2. 更改当前用户头像
>传入头像链接，改变当前用户头像

请求调用示例:

```javascript
function changeCurrentUserAvatar() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
                },
                    function (error) {
                        alert("调用失败");
                    },
                    "WorkPlus_NetCa",
                    "changeCurrentUserAvatar",
                    [{"avatar":"http://tc.sinaimg.cn/maxwidth.800/tc.service.weibo.com/static_jinrongbaguanv_com/5886a925e3bd5fc2a3adf8f9a36324c8.png"}]
                );
        }

说明：
请求输入数据：
[
	{
    	"avatar":"用户头像地址"
	}
]


请求返回数据：无
```

##3. 是否插入证书
>

请求调用示例:

```javascript
function isHasCert() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
                },
                    function (error) {
                        alert("调用失败");
                    },
                    "WorkPlus_NetCa",
                    "isHasCert",
                    [{}]
                );
        }

说明：
请求输入数据：无
请求返回数据：成功： success ， 失败会有失败message
```

##4. 当前登录用户ca证书
>

请求调用示例:

```javascript
function getSignNetCa() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
                },
                    function (error) {
                        alert("调用失败");
                    },
                    "WorkPlus_NetCa",
                    "getSignNetCa",
                    [{}]
                );
        }



说明：
请求输入数据：无
请求返回数据：成功： success ， 失败会有失败message
```

##5. 使用证书对数据进行签名
>

请求调用示例:

```javascript
function signData() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
                },
                    function (error) {
                        alert("调用失败");
                    },
                    "WorkPlus_NetCa",
                    "signData",
                    [{"data":"123456"}]
                );
        }
说明：
请求输入数据：
[
 [
  {
  "data":"需要签名的数据"
  }
  ...
 ]
	...
]
请求输入数据：无
请求返回数据：成功：返回签名字符串 ， 失败会有失败message
```

