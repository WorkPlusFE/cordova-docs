# 图片插件(WorkPlus_Image)
---

## 1. 拍照返回
>拍照，压缩图片后直接返回图片 

请求调用示例:

```javascript
function takePhoto(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "takePhoto", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"imageURL":"压缩后图像存在本地的地址",
	"key":"原图像存在本地的地址",
	"imageInfo": //相对于图像的信息
	{
		"height":"图像高",
		"width":"图像宽",
		"size":"图像大小"
	}
}
```

## 2. 拍照返回并且可编辑
>拍照，截图返回

请求调用示例:

```javascript
function takePhotoWithEdit(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "takePhotoWithEdit", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"imageURL":"压缩后图像存在本地的地址",
	"key":"原图像存在本地的地址",
	"imageInfo": //相对于图像的信息
	{
		"height":"图像高",
		"width":"图像宽",
		"size":"图像大小"
	}
}
```

## 3. 选择图片（单张）
>调用图片相册，选择图片并压缩返回

请求调用示例:

```javascript
function selectImage(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "selectImage", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"imageURL":"压缩后图像存在本地的地址",
	"key":"原图像存在本地的地址",
	"imageInfo": //相对于图像的信息
	{
		"height":"图像高",
		"width":"图像宽",
		"size":"图像大小"
	}
}
```

## 4. 选择图片并截图返回（单张）
>调用图片相册，选择图片并截取返回

请求调用示例:

```javascript
function selectImageWithEdit(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "selectImageWithEdit", 
        []);
}

说明：
请求输入数据：无
请求返回数据：
{
	"imageURL":"压缩后图像存在本地的地址",
	"key":"原图像存在本地的地址",
	"imageInfo": //相对于图像的信息
	{
		"height":"图像高",
		"width":"图像宽",
		"size":"图像大小"
	}
}
```

## 5. 选择多张图片
>调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输

请求调用示例:

```javascript
function selectImageWithEdit(){
  cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "selectImages", 
        [{
          "imageKeys":["本机的地址", "xxx",...]
          }]
        );
}

说明：
请求输入数据(可无)：
{
  "imageKeys":["本机的地址", "xxx",...],
  "medias": 1 //相册选择时, 支持的类型. 1表示需支持视频选择. 可不填, 不填则默认只选择图片
}

请求返回数据：
[{
	"imageURL":"压缩后图像存在本地的地址",
	"key":"原图像存在本地的地址",
	"imageInfo": //相对于图像的信息
	{
		"height":"图像高",
		"width":"图像宽",
		"size":"图像大小"
	}

 },
 {
   "key": "视频本地的地址",
   "videoURL": "视频本地的地址"
 }
...
]
```

## 6. 清除压缩后的图片
>拍照或选择照片后都会生成压缩图片，调用这个方法去清除

请求调用示例:

```javascript
function cleanCompressImage(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "cleanCompressImage", 
        []
        );
}

说明：
请求输入数据：无
请求返回数据：无
```

## 7. 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
>传输图片地址，预览图片

请求调用示例:

```javascript
function showImages(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "showImages", 
        [{
        	“urls”:["图片在本机的地址", "xxxxx",...],
         	"medias":["图片的mediaId", "xxxxx",...],
         	"position":"1"
         }]
        );
}

说明：
请求输入数据：
[{
	“urls”:["图片在本机的地址", "xxxxx",...],
 	"medias":["图片的mediaId", "xxxxx",...],
 	"position":"1"（表示从第几张打开）
}]请求返回数据：无
```

## 8. 保存图片
>传输图片地址，保存图片

请求调用示例:

```javascript
function saveImages(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "saveImages", 
        [
        	{
        	 	"url":"图片url地址"
         	}
        ]
        );
}

说明：
请求输入数据：
[
	{
    //"mediaId", "url", "imageData" 都是选填参数, 三者根据开发者的场景, 进行选择
		“mediaId”:"图片mediaId",  
	 	"url":"图片url地址",
    "imageData": "base64数据"
 	}
]
请求返回数据：无
```


## 9. 长按图片弹出框
>弹出框包括"识别二维码", "保存图片"等选项

请求调用示例:

```javascript
function actionForLongPressImage(){
 cordova.exec(function(result) {
            alert(JSON.stringify(result, null, 4));
        },
        function(error) {
            alert("调用失败");
        },
        "WorkPlus_Image",
        "actionForLongPressImage", 
        []
        );
}

说明：
请求输入数据：
[
    {
        "imageData": "base64数据"
    }
]
请求返回数据：无
```

## 10. 新增拍照返回接口(返回带mediaId方式)(Workplus 3.1.3版本以上使用)
>新增接口，拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId

请求调用示例:

```javascript

        function takePicture() {
            cordova.exec(function(result) {
                    alert(result)
                },
                function(error) {
                    alert(error)
                },
                "WorkPlus_Image",
                "takePicture", [{"editable":true
            }]);
        }

说明：
请求输入数据：[{"editable":true}]
editable  表示是否进行裁剪 
true : 进行裁剪返回，false : 不裁剪直接返回

请求返回数据：
{
    "mediaId": "返回后台的mediaId"
	"imageURL":"压缩后图像存在本地的地址",
	"key":"原图像存在本地的地址",
	"imageInfo": //相对于图像的信息
	{
		"height":"图像高",
		"width":"图像宽",
		"size":"图像大小"
	}
}
```

## 11. 新增选择图片接口(返回带mediaId方式)(Workplus 3.1.3版本以上使用)
>调用图片相册，根据用户参数决定是否选择多张图片或单张图片，支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,选择完后会进行后台上传，返回值中带有上传后的mediaId

请求调用示例:

```javascript
cordova.exec(function(result) {
                    alert(result)
                },
                function(error) {
                    alert(error)
                }, 
                "WorkPlus_Image",
                "chooseImages", [{"multiple":true,
                "imageKeys":["图片在本机的地址", "xxx",...],
                "editable":true,
                "file_limit" : {"max_select_count" : 12, "single_select_size": -1, "total_select_size": -1},
            }]);
说明：
请求输入数据：
[{
   "multiple":true,
   "imageKeys":["图片在本机的地址", "xxx",...],
   "editable":true,
   "file_limit": {
        "max_select_count": 12,
        "single_select_size": -1, 
        "total_select_size": -1  
    },
}]

multiple : 是否是多选，ture(多选)  fals(单选)
editable : 是否对图像进行剪裁 true(剪裁)  false(不剪裁) 
注意: editable 为true剪裁方式仅对于单选图片情况下生效，即multiple = false
imageKeys : 可以传送之前选过的图片

file_limit: 
max_select_count 多选时数量的限制,

single_select_size 单个文件选择大小限制(byte), -1表示不限制

total_select_size, 所有文件选择大小限制(byte), -1表示不限制


请求返回数据：
[{
	"imageURL":"压缩后图像存在本地的地址",
	"key":"原图像存在本地的地址",
	"mediaId":"图像在后台的媒体mediaId"
	"imageInfo": //相对于图像的信息
	{
		"height":"图像高",
		"width":"图像宽",
		"size":"图像大小"
	}
 },
...
]
```


## 12. 图片添加水印接口(Workplus 3.6.0版本以上使用)
>拍照，生成水印图片返回

请求调用示例:

```javascript
function takePictureAddWatermark() {
            cordova.exec(function (result) {

                 },
                 function (error) {
                     alert("调用失败");
                 },
                 "WorkPlus_Image",
                 "takePhotoAndAddWaterMark",
                 [{
                    "content":"1234567890",
                    "font_size":"14",
                    "color":"#FF5858",
                    "mark_disable": false,
                    "time_enable": true,
                    "location_enable": true,
                    }]
                 );
        }
说明：
请求输入数据：
[{
   "content":“水印内容”,
   "font_size":"水印字号大小",
   "color":“水印颜色”,
   "mark_disable": false, // 屏蔽水印，false:不屏蔽。true：屏蔽
   "time_enable": true,   // 水印添加时间：false：不添加。true：添加
   "location_enable": true,//水印添加位置：false：不添加。true：添加
}]


请求返回数据：
{
"imageURL":"压缩后图像存在本地的地址",
"key":"原图像存在本地的地址",
"mediaId":"图像在后台的媒体mediaId"
"imageInfo": //相对于图像的信息
{
"height":"图像高",
"width":"图像宽",
"size":"图像大小"
}
}
```

## 13. 定制化人脸拍照界面
>（该接口需要单独定制，需要联系开发人员）

请求调用示例:

```javascript
function faceRecognition() {
    cordova.exec(function(result) {
    alert(JSON.stringify(result, null, 4));
    },
    function(error) {
    alert("失败");
    },
    "WorkPlus_Image",
    "captureStillImage",[
    ]);
}
说明：
请求输入数据：
无

请求返回数据：
成功
{
"crop_path":"path", // 返回图片本地路径
"crop_img":"imageBase64Str" // 返回图片base64
}
失败
{"message":"获取图片失败"}
```
