# 富力人脸识别cordova接口
####人脸识别接口
--
function faceBizValid() {
            cordova.exec(function (result) {
                    alert(JSON.stringify(result, null, 4));
            },
                function (error) {
                    alert("调用失败");
                },
                "WorkPlus_Auth",
                "faceBioAuth", [{"livenessType":"still"}]);
        }
        
        --说明
        livenessType 取值为三种
        still(静态) 
        meglive(动态) 
        flash(炫彩)
        
        如果livenessType不传，那么我们将使用我们域设置后台设置的状态
        
        返回值
        resultCode 为0 表示认证通过，非0则为errorCode，可以反馈给我们进行相应排查


