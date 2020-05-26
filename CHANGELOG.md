## 更新日志

#### 20200526

* 新增 WorkPlus_AudioAndVideo#startVideoRecoder 参数 front / sync_system_album, 支持控制录制视频时是否使用前置摄像头和是否同步到系统相册

*  新增WorkPlus_Image#selectImages 参数 medias, 控制是否在相册选择时, 显示出视频出来



#### 20200316

* 新增Workplus\_VoicePlugin, 支持相关语音语音操作
* 新增Workplus\_LightApp#routeBiometricAuthenticationLock, 支持生物认证(指纹或者FACE_ID)
* 新增WorkPlus\_AudioAndVideo#translateAudio方法, 支持音频转换mp3格式(amr转 mp3)

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




