## 更新日志


#### 20210514

* 增加`蜂巢会议`相关功能接口，包括：
    1. 打开原生发起、加入、预约会议界面
    2. 加入会议
    3. 再次发起会议
    4. 分享会议
    5. 邀请入会

#### 20200529
* WorkPlus_Image#saveImages 新增base64支持

#### 20200526

* 新增 WorkPlus_AudioAndVideo#startVideoRecoder 参数 front / sync_system_album, 支持控制录制视频时是否使用前置摄像头和是否同步到系统相册
* 新增WorkPlus_Image#selectImages 参数 medias, 控制是否在相册选择时, 显示出视频出来
* 新增WorkPlus_Org, 支持组织相关操作
* 新增WorkPlus_Contact#selectScopes, 能够选择组织内相关节点的范围
* 新增WorkPlus_AppStore#adminRefreshApps, adminQueryApp 等方法, 用以提供给管理员操作应用
* 新增WorkPlus_Webview#getShareItems, 让前端能够开发出类似于原生分享的UI
* 新增WorkPlus_Webview#copyText , 复制文本
* 修改WorkPlus_Webview#openWebView, 增加 use_system_webview参数, 让ios/ android都能够控制跳转到第三方浏览器



#### 20200316

* 新增Workplus\_VoicePlugin, 支持相关语音语音操作
* 新增Workplus\_LightApp#routeBiometricAuthenticationLock, 支持生物认证(指纹或者FACE_ID)
* 新增WorkPlus\_AudioAndVideo#translateAudio方法, 支持音频转换mp3格式(amr转 mp3)

#### 20200113

* WorkPlus\_HTMemberPlugin#getSignature 特定平台获取签名信息

#### 20191230

* WorkPlus\_ImagesPlugin#takePhotoAndAddWaterMark 添加拍照水印添加时间和定位信息
* WorkPlus\_ImagesPlugin#captureStillImage 新增定制人脸拍照界面

#### 20191228

* WorkPlus\_FilePlugin#getUserFilePath 增加返回说明

#### 20191209

* WorkPlus\_FilePlugin#showFile `filePath`参数支持传入 http url 地址


#### 20191128

* 新增 WorkPlus_WebView#voiceToText, 支持语音转文本

#### 20191125

* WorkPlus\_WebView#share 新增 `dicrectly `参数, 始支持直接分享(暂时只提供直接分享内部联系人)

#### 20190930

* WorkPlus\_FilePlugin#showFile 新增 `filePath`参数, 始支持打开本地文件
* 新增 WorkPlus\_AudioAndVideoPlugin 与 WorkPlus\_OCR 接口


#### 20190827

* 增加设置网页顶栏颜色的方法说明（网页#20）

* WorkPlus_Contact#selectContacts 新增 `selectedUsers`, `selectedEmployees`参数, 始支持复选
* 新增 WorkPlus_Auth#faceBioAuth, 集成人脸识别后支持cordova调用人脸识别




