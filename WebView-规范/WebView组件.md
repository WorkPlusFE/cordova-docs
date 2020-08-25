#WebView插件功能规范



> 版本历史描述

|  版本号  |  更新描述  |
|-----------|---------------|
| 1.0.1 |  添加了一些新的规范 |
| 1.0.0 | 给WebView插件提供了【修改标题】，【修改返回键事件】，【锁定与解锁导航栏】，【分享组件】，【定义导航栏右键】等功能 |


##1. 修改标题
 WebView页面，可以调用cordova组件来显示的修改当前页面的标题

~~~javascript
         //改变WebView标题
        function changeTitle(){
            cordova.exec(function(result){
                         alert("修改标题成功");
                         },
                         function (error) {
                         alert("修改标题失败";
                         },
                         "WorkPlus_WebView",
                         "title",
                         ["NEW Title"]);
        }
~~~

> 调用此cordova, 页面的标题会修改为：【NEW Title】

##2. 修改返回键事件
 WebView默认的返回事件，为返回上一级或返回轻应用；如果WebView页面希望重写返回事件，可以将返回键事件关联到指定的JS方法中
 > 重写返回事件，请一定要记得保证事件的正确性，不要因为重写返回事件导致用户无法返回等不正常现象；移动端同时也提供了取消返回事件的功能，将返回键还原为默认的行为


~~~javascript
        //定义返回事件
        function leftButton(){
            cordova.exec(function(result){
                         alert("定义返回键成功");
                         
                         },
                         function (error) {
                         alert("定义返回键失败:" + error);
                         },
                         "WorkPlus_WebView",
                         "leftButton",
                         ["back"]);
        }
        
        function back(){
            alert("想返回，没门");
        }
~~~

> 调用此cordova后，用户点击返回，会弹出一个【想返回，没门】的alert,用户无法返回

##3. 还原返回左边默认事件

~~~javascript
        //清除返回事件
        function clearLeftButton(){
            cordova.exec(function(result){
                         alert("还原成功");
                         
                         },
                         function (error) {
                         alert("发生错误:" + error);
                         },
                         "WorkPlus_WebView",
                         "clearLeftButton",
                         []);
        }
~~~

> 调用此cordova,页面左边会还原于【返回】，【关闭】两个默认的行为

##4. 锁定与解锁WebView导航栏
考虑到一定情况下，用户希望锁住返回或右键功能；移动端提供了此功能

> 应在设计上避免此需求；当特定情况下，不希望用户能返回上一页的时候才使用此功能

锁定导航栏

~~~javascript
        //锁定导航栏
        function lockNavigation(){
            cordova.exec(function(result){
                         alert("导航栏锁定成功");
                         },
                         function (error) {
                         alert("发生错误:" + error);
                         },
                         "WorkPlus_WebView",
                         "navigation",
                         ["lock"]);
        }
~~~

解锁导航栏

~~~javascript
        //解锁导航栏
        function unLockNavigation(){
            cordova.exec(function(result){
                        alert("导航栏解锁成功");
                         },
                         function (error) {
                         alert("发生错误:" + error);
                         },
                         "WorkPlus_WebView",
                         "navigation",
                         ["unLock"]);
        }
~~~

> 当导航栏被锁定时，用户点击左边或右边的按钮都将无法点击

##5. 分享组件

 移动端提供分享组件的功能，当前仅支持网页分享；

~~~javascript
           function shareUrl(){
            cordova.exec(function(result){
                         alert("导航栏解锁成功");
                         
                         },
                         function (error) {
                         alert("发生错误:" + error);
                         },
                         "WorkPlus_WebView",
                         "share",
                        [{"url":"http://www.baidu.com","title":"百度"}]);
        }
~~~

> 分享组件 提供了包括QQ,微信，同事，safari原生打开等

##6. 定义右键导航功能
右键导航功能是指在导航栏右边定义按钮
> 最多允许在右边定义三个按钮，每个按钮又允许定义下拉，下拉没有数量限制，但建议不超过5个

>右键导航功能格式

~~~javascript
 [
  {"icon":"1",
    "title":"更多",
    "action":"list",
    "value":""
    
  },
  {"icon":"2",
   "title":"拍照",
   "action":"js",
   "value":"photo"
    
  },
  {"icon":"1",
  "title":"下一步",
  "action":"js",
  "value":"next"
  },
  {"icon":"3",
  "title":"刷新",
  "action":"system",
  "value":"refresh"
  }
]
~~~

上述为定义一个按钮的JSON格式，是由一个数组组成；格式采用【流水式布局】，
即数组中的第一个定义，为按钮本身的定义，它可以List,Js,System三者之一

可定义包含三种行为：

1 List 下拉组件 ，表示点击会弹出一个popview,只能在一级菜单中定义；下拉组件定义在二级菜单中无效

2 JS 调用HTML页面中的JS语法；可在一级，二级菜单中定义

3 System 系统事件；内置的一些系统行为，比如刷新，分享等；可在一级，二级菜单中定义

你可以最多定义三个如上的按钮，每个按钮采用如上定义

~~~javascript
 //定义右键事件
        function rightButton(){
            cordova.exec(function(result){
                         alert("导航栏解锁成功");
                         
                         },
                         function (error) {
                         alert("发生错误:" + error);
                         },
                         "WorkPlus_WebView",
                         "rightButtons",
                         ['[{"icon":"1","title":"更多","action":"list","value":""},{"icon":"2","title":"aaa","action":"js","value":"aaa"},{"icon":"1","title":"bbb","action":"js","value":"bbb"}]'
                          ,
                          '[{"icon":"1","title":"下一步","action":"js","value":"next"}]'
                          ]
                         );
        }

~~~

如上，定义了两个右键按钮，第一个为更多，它是一个下拉式按钮，用户点击时，会出现aaa,bbb两个选项，
用户点击aaa时,会调用页面的aaa方法，点击bbb时，用调用bbb方法

另一个是【下一步】按钮，这是个JS事件按钮，用户点击下一步时，会直接调用页面中的JS（next）方法

##7. 系统默认行为事件
|   Action  |  行为   |
|-------------|-------------|
| Refresh | 刷新当前页面 |
| Share | 分享 |
| Close | 关闭 |

> 系统行为有自己的默认图标，如用户未指定文字或图标，使用默认图标，否则使用用户指定的图标或文字（图片优先）

##8. 按钮图标规则


 目前支持三种规则:

 1. 使用系统内置图标, 如下表.
 2. 使用base64, 此时icon取值为 "icon":"base64:xxxxxx" 


>  定义按钮时，用户可以从以下内置图标中选择一个做为自己按钮的图标

| 图标编号 | 图标  | 图标编号 |  图标 |
|--------|-----------| --------|-----------|
| 1 | ![ICON_1](./img/ICON_1.png) | 2 | ![ICON_1](./img/ICON_2.png) |
| 3 | ![ICON_1](./img/ICON_3.png) | 4 | ![ICON_1](./img/ICON_4.png) |
| 5 | ![ICON_1](./img/ICON_5.png) | 6 | ![ICON_1](./img/ICON_6.png) |
| 7 | ![ICON_1](./img/ICON_7.png) | 8 | ![ICON_1](./img/ICON_8.png) |
| 9 | ![ICON_1](./img/ICON_9.png) | 10 | ![ICON_1](./img/ICON_10.png) |
| 11 | ![ICON_1](./img/ICON_11.png) | 12 | ![ICON_1](./img/ICON_12.png) |
| 13 | ![ICON_1](./img/ICON_13.png) | 14 | ![ICON_1](./img/ICON_14.png) |
| 15 | ![ICON_1](./img/ICON_15.png) | 16 | ![ICON_1](./img/ICON_16.png) |
| 17 | ![ICON_1](./img/ICON_17.png) | |

> 以上图片均为白色前景，透明背景（为显示效果做了灰色背景处理）


~~~
  {"icon":"3",
  "title":"刷新",
  "action":"system",
  "value":"refresh"
  }
~~~

如上述定义，表示将使用图标3，也就是![ICON_1](./img/ICON_3.png)



##9. 清除右键
> 用户一旦自己定义了右键事件，就需要对右键负责，在必要的时候，需要重新更新或清除掉右键功能

~~~javascript
          //清除右键事件
        function clearRightButtons(){
            cordova.exec(function(result){
                         alert("导航栏解锁成功");
                         
                         },
                         function (error) {
                         alert("发生错误:" + error);
                         },
                         "WorkPlus_WebView",
                         "clearRightButtons",
                         []);
        }
~~~

> 自定义右键行为清除后，会还原为右键默认行为，就是包含分享，复制，从浏览器打开等




##10. 隐藏或显示左边的返回及关闭

> 用户可以定义cordova显示的隐藏或显示左边的两个按钮，调用逻辑如下：

~~~javascript
          //设置左边返回及关闭按钮
        function setLeftButton(){
            cordova.exec(function(result){
                         alert("设置成功");
                         
                         },
                         function (error) {
                         alert("发生错误:" + error);
                         },
                         "WorkPlus_WebView",
                         "visibleLeftButton",
                         [
                         {"showBack":false,
                         "showClose":false
                         }
                         ]);
        }

~~~




> 以上所有的定义，均只在当前页面有效，如果页面重新跳转到一个新的页面后，所有设置会自动还原成默认行为；但如果是使用Ajax进行页面元素处理，则不会还原，用户定义以上事件时，需要保障整个WebView的可返回或可关闭性；