# 文件插件(WorkPlus_Files)
---
## 1. 单选文件
>打开WorkPlus文件选择管理器，选择单个文件返回

请求调用示例:

```javascript
function selectFile	(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Files",
        "selectFile", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：
[{
	"filePath": "文件在本机的路径"
}]	
```

## 2. 多选文件
>打开WorkPlus文件选择管理器，选择多个文件返回

请求调用示例:

```javascript
function selectFiles(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Files",
        "selectFiles", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：
[
 {
	"filePath": "文件在本机的路径"
 },
...
]	
```

<br/>


## 3. 打开邮件附件
>打开指定路径的文件, 并预览

请求调用示例:

```javascript
function openEmailAttachment(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Files",
        "openEmailAttachment", 
        [{"uri":"xx", "type":"xxx"}]
        );
}

说明：
请求输入数据：
[
    {
        "uri": "xx",
        "type": "xxx"
    }
]
请求返回数据：无
```

<br/>


## 4. 获取邮件附件目录
>获取当前登录帐号的邮件附件目录

请求调用示例:

```javascript
function getEmailAttachmentDir(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Files",
        "getEmailAttachmentDir", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：
{
    "message": "xxxx",		//邮件附件路径
    "status":"xxx"
}
```

<br/>

## 5. 新增文件选择接口(返回带mediaId方式)(Workplus 3.1.3版本以上使用)
>打开WorkPlus文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带mediaId
>请求调用示例:

```javascript
 function chooseFiles() {
 cordova.exec(function(result) {
    alert(result)
    },
    function(error) {
        alert(error)
    },
 "WorkPlus_Files",
 "chooseFiles", [{"multiple":true, "file_limit" : {"max_select_count" : 12, "single_select_size": -1, "total_select_size": -1}, "file_keys":[]}]
);
}
说明：
请求输入数据：
{
    "multiple": true, //单选, 多选
    "file_limit": {
        "max_select_count": 12, //多选时数量的限制
        "single_select_size": -1, //单个文件选择大小限制(byte),-1表示不限制
        "total_select_size": -1  //所有文件选择大小限制(byte),-1表示不限制
    },
    "file_keys": []     //已选文件列表(file path)
}

请求返回数据：
[
 {
	"filePath": "文件在本机的路径"
    "mediaId": "该文件在后台的媒体mediaId"
    "name" : "文件名字"
 },
...
]	
```

<br/>

## 6. 获取 workplus 文件目录路径(Workplus 3.1.4版本以上使用)

```javascript

 function getUserFilePath() {
 cordova.exec(function(result) {
    alert(result)
    },
    function(error) {
        alert(error)
    },
 "WorkPlus_Files",
 "getUserFilePath", [{"system" : "file"}]
);
}

说明:
请求输入数据: 
{
	"system" : "file",
	"custom" : "xxxx"
}
system: 表示workplus app 定义的路径
目前支持"file", "dropbox"类型, 分别获取下载文件目录, 跟网盘目录

custom: 轻应用自定义的用户目录, 如传入参数"custom" : "abc", app 将创建sdcard_root/app_file/username/abc 的文件目录, 并返回路径给调用者

以上参数 system 优先级比较高, 即两个类型同时传入时, 以"system"为准

```

##7. 打开文件详情
>通过指定 mediaId, fileName 等参数, 打开文件详情界面

```javascript
function openFileDetail() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Files",
                "showFile",
                [{
                    "fileName": "xxx",
                    "fileSize": xxx,
                    "mediaId" : "Z3JvdXAxL00wMC8wOS82RS9yQkFDLUZzV1EwMkFJblF5QUFDb293akxFYjQ5NjIuanBn",
                    "isImage": false
                }]
            );
        }
        
说明:
请求输入数据:
[{
	"fileName": "xxx",
    "fileSize": xxx,
    "mediaId" : "xxx",
    "isImage": false //指定文件是否是图片, 若为 true, 客户端则强制打开图片预览界面, false 则通过 fileName后缀来判断文件类型, 非图片则使用文件详情界面
}]
    
        
```

##8. 本地打开文件
>原生打开文件(pdf, excel, word, ppt 等)

```javascript
function readFile() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Files",
                "readFile",
                [{
					"path": "xxxx"
                }]
            );
        }
```



##9. 判断文件是否存在
>判断指定路径的文件是否存在

```javascript
function isFileExist() {
            cordova.exec(function (result) {
                alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Files",
                "isFileExist",
                [{
					"path": "xxxx"
                }]
            );
        }
        
        
请求返回数据：
[
 {
	"exist" : true //文件是否存在
 }
]
```



