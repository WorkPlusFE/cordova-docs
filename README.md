## WorkPlus Cordova API 说明文档

[![Build Status](https://travis-ci.org/WorkPlusFE/cordova-docs.svg?branch=master)](https://travis-ci.org/WorkPlusFE/cordova-docs)

WorkPlus Cordova SDK 驻留在 WorkPlus 移动 App 上，为部署在 WorkPlus 应用中心的轻应用提供访问 WorkPlus 移动 App 功能的能力。[点击查看文档](https://workplusfe.github.io/cordova-docs/)

> 当前版本的 Cordova SDK 依赖的 Cordova 版本是3.8.0。本文只介绍 WorkPlus Cordova API，如果您需要详细了解 Cordova，请参考其官方网站[http://cordova.apache.org/](http://cordova.apache.org/)。

使用 WorkPlus 扫一扫，查看在线例子：

<img src="https://github.com/WorkPlusFE/codash/raw/master/design/qr-code.png" width=160 alt="cordova example" />

### 如何参与文档编辑

Fork Master主干代码，新增或编辑文档内容后，提交 Pull-Request 即可。

### 如何发布

```bash
git clone https://github.com/WorkPlusFE/cordova-docs.git

// 安装依赖
cd cordova-docs
npm i

// 部署到github
npm run deploy
```

### 如何导出PDF

生成电子书 (epub, mobi, pdf) 时需要ebook-convert。在 Mac 下，使用 homebrew 安装 calibre 即可:

```bash
brew install calibre
```

安装成功后，进入项目根目录，执行:

```bash
npm run export:pdf
```

文件将会生成到`./pdf`文件夹下。

### 文档维护者

* [dasunsy](https://github.com/dasunsy)
* [hejx](https://github.com/hejianxian)



