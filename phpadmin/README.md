<br />
<div align="center">
    <img src="https://wonderful-code.gitee.io/images/readme/logo-title.png" alt="" />
    <br />
    <a href="https://demo.buildadmin.com/" target="_blank">演示站</a> |
    <a href="https://wonderful-code.gitee.io/" target="_blank">文档</a> |
    <a href="https://jq.qq.com/?_wv=1027&k=QwtXa14c" target="_blank">加群</a> |
    <a href="https://wonderful-code.gitee.io/guide/" target="_blank">视频介绍</a> |
    <a href="https://gitee.com/wonderful-code/buildadmin" target="_blank">Gitee仓库</a> |
    <a href="https://github.com/build-admin/BuildAdmin" target="_blank">GitHub仓库</a>
</div>
<br />
<p align="center">
    <a href="https://www.thinkphp.cn/" target="_blank">
        <img src="https://img.shields.io/badge/ThinkPHP-%3E6.0-brightgreen?color=91aac3&labelColor=439EFD" alt="vue">
    </a>
    <a href="https://v3.vuejs.org/" target="_blank">
        <img src="https://img.shields.io/badge/Vue-%3E3.x-brightgreen?color=91aac3&labelColor=439EFD" alt="vue">
    </a>
    <a href="https://element-plus.gitee.io/#/zh-CN/component/changelog" target="_blank">
        <img src="https://img.shields.io/badge/Element--Plus-%3E2.2-brightgreen?color=91aac3&labelColor=439EFD" alt="element plus">
    </a>
    <a href="https://www.tslang.cn/" target="_blank">
        <img src="https://img.shields.io/badge/TypeScript-%3E4.4-blue?color=91aac3&labelColor=439EFD" alt="typescript">
    </a>
    <a href="https://vitejs.dev/" target="_blank">
        <img src="https://img.shields.io/badge/Vite-%3E2.9-blue?color=91aac3&labelColor=439EFD" alt="vite">
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
        <img src="https://img.shields.io/badge/Pinia-%3E2.0-blue?color=91aac3&labelColor=439EFD" alt="vite">
    </a>
    <a href="https://gitee.com/wonderful-code/buildadmin/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/badge/Apache2.0-license-blue?color=91aac3&labelColor=439EFD" alt="license">
    </a>
</p>

<br>
<div align="center">
  <img src="https://wonderful-code.gitee.io/images/readme/index.gif" />
</div>
<br>
### 使用
#### 其中 buildadmin 为项目根目录，该目录包含一个没有前后缀的 think 文件

```
cd buildadmin
```

#### git克隆的代码需要执行这条命令，完整包不需要，若找不到命令，可以尝试:composer.phar install
```
composer install
```

#### Linux下推荐使用:sudo php think run
#### Linux下若加sudo后仍然异常，请确保 buildadmin 目录的所有者和执行此命令的用户一致，推荐root
```
php think run
```
###	PHP >= 7.1 且 <= 7.3 (开发环境为PHP7.1版本)	达成指引(opens new window)
###	Mysql >= 5.6 且 <= 8.0 (需支持innodb引擎、开发环境为5.7版本)
###	NodeJs >= 14.13.1	达成指引(opens new window)
###	Npm >= 7.0.0	达成指引(opens new window)
###	Composer（完整包不必要，Git克隆包必需安装）	达成指引

### 介绍
🌈 基于 Vue3.x setup + ThinkPHP6 + TypeScript + Vite + Pinia + Element Plus等流行技术栈的后台管理系统，自适应多端、支持CRUD代码生成、自带WEB终端、同时提供Web和Server端、内置全局数据回收站和字段级数据修改保护、自动注册路由、无限子级权限管理等，无需授权即可免费商用，希望能帮助大家实现快速开发。

### 主要特性
**🚀 CRUD代码生成：**
一行命令即可生成数据表的增删改查代码，大气且实用的表格，多达22种表单组件支持，拖拽排序，受权限控制的编辑和删除等等，并支持关联表，可为您节省大量开发时间。

**💥 内置WEB终端：**
我们内置了一个WEB终端以实现一些理想中的功能，比如：虽然是基于vue3的系统，但你在安装本系统时，并不需要手动执行`npm install`和`npm build`命令。且后续本终端将为您提供更多方便、快捷的服务。

**👍 流行且稳定的技术栈：**
除了基于`ThinkPHP6`前后端分离架构外，我们的`Vue3`使用了`Setup`、状态管理使用`Pinia`、并使用了`TypeScript`、`Vite`等可以为你的知识面添砖加瓦的技术栈。

**🌴 数据回收与反悔：**
内置全局数据回收站，并且提供字段级数据修改记录和修改对比，随时回滚和还原，安全且无感。

**🔀 前后端分离：**
`web`文件夹内包含：`干净`(不含后端代码)、`完整`(所有前端代码文件均在此内) 的前端代码文件，对前端开发者友好，且我们正在开发`package.json`自动维护以及积分制的`模板与案例市场`功能，作为纯前端开发者，您可以将BAdmin当做学习与资源的社群，本系统可为您准备好案例和模板等所需要的环境，而您只需专注于学习或工作，不需要会任何后端代码！（邀您：[和我们一起](https://jq.qq.com/?_wv=1027&k=QwtXa14c) ）

**✨ 高颜值：**
提供三种布局模式，其中默认布局使用无边框设计风格，它并没有强行填满屏幕的每一个缝然后使用边框线进行分隔，所有的功能版块，都像是悬浮在屏幕上的，同时又将屏幕空间及其合理的利用了。

**🔐 权限验证：**
可视化的管理权限，然后根据权限动态的注册路由、菜单、页面、按钮(权限节点)、支持无限父子级权限分组、前后端搭配鉴权，自由分派页面和按钮权限。

**📝 未来可期：**
我们正在持续维护系统，并着手开发各种oss、云短信等的支持，甚至提供开箱即用的各行业完整应用。

**🧱 一举多得：**
后台自适应PC、平板、手机等多种场景的支持，轻松应对各种需求。

**💖 其他杂项：**
角色组/管理员/管理员日志、 会员/会员组/会员余额、积分日志、系统配置/控制台/附件管理/个人资料管理等等、更多特性等你探索...

### 安装使用
💫 我们提供了完善的文档，对于熟悉`ThinkPHP`和`Vue`的用户，请使用大佬版：[快速上手](https://wonderful-code.gitee.io/guide/install/start.html) ，对于新人朋友，我们额外准备了各个操作系统的从零开始套餐：[Windows从零到一](https://wonderful-code.gitee.io/guide/install/windows.html) | [Linux从零到一](https://wonderful-code.gitee.io/guide/install/linux-bt.html) | [MacBook安装引导](https://wonderful-code.gitee.io/guide/install/macBook.html)

### 联系我们
- [演示站](https://demo.buildadmin.com/) 账户：`admin`，密码：`123456`（演示站数据无法修改，请下载源码安装体验全部功能）
- [文档：wonderful-code.gitee.io](https://wonderful-code.gitee.io/)
- [加群：687903819](https://jq.qq.com/?_wv=1027&k=QwtXa14c)
- [Gitee仓库](https://gitee.com/wonderful-code/buildadmin)
- [GitHub仓库](https://github.com/build-admin/BuildAdmin)
- [备用文档：doc.buildadmin.com](https://doc.buildadmin.com/)
- [邮箱 1094963513@qq.com](mailto:1094963513@qq.com)

### 项目预览
|  |  |
|---------------------|---------------------|
|![登录](https://wonderful-code.gitee.io/images/readme/login.gif)|![控制台](https://wonderful-code.gitee.io/images/readme/dashboard.png)|
|![布局配置](https://wonderful-code.gitee.io/images/readme/layout.png)|![表格](https://wonderful-code.gitee.io/images/readme/admin.png)|
|![表单](https://wonderful-code.gitee.io/images/readme/user.png)|![系统配置](https://wonderful-code.gitee.io/images/readme/config.png)|
|![数据回收规则](https://wonderful-code.gitee.io/images/readme/data-recycle.png)|![数据回收日志](https://wonderful-code.gitee.io/images/readme/data-recycle-log.png)|
|![敏感数据](https://wonderful-code.gitee.io/images/readme/sensitive-data.png)|![菜单](https://wonderful-code.gitee.io/images/readme/menu.png)|
|![单栏布局](https://wonderful-code.gitee.io/images/readme/layout-3.png)|![经典布局](https://wonderful-code.gitee.io/images/readme/layout-2.png)|

### 特别鸣谢
💕 感谢巨人提供肩膀，排名不分先后
- [Thinkphp](http://www.thinkphp.cn/)
- [FastAdmin](https://gitee.com/karson/fastadmin)
- [Vue](https://github.com/vuejs/core)
- [vue-next-admin](https://gitee.com/lyt-top/vue-next-admin)
- [Element Plus](https://github.com/element-plus/element-plus)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [vue-router](https://github.com/vuejs/vue-router-next)
- [vite](https://github.com/vitejs/vite)
- [Pinia](https://github.com/vuejs/pinia)
- [Axios](https://github.com/axios/axios)
- [nprogress](https://github.com/rstacruz/nprogress)
- [screenfull](https://github.com/sindresorhus/screenfull.js)
- [mitt](https://github.com/developit/mitt)
- [sass](https://github.com/sass/sass)
- [wangEditor](https://github.com/wangeditor-team/wangEditor)
- [echarts](https://github.com/apache/echarts)
- [vueuse](https://github.com/vueuse/vueuse)
- [lodash](https://github.com/lodash/lodash)
- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [vuepress](https://github.com/vuejs/vuepress)
- [countUp](https://github.com/inorganik/countUp.js)
- [Sortable](https://github.com/SortableJS/Sortable)
- [v-code-diff](https://github.com/Shimada666/v-code-diff)

### 版权信息
🔐 BuildAdmin 遵循`Apache2.0`开源协议发布，提供无需授权的免费使用。\
本项目包含的第三方源码和二进制文件之版权信息另行标注。

### 支持项目
💕 无需捐赠，如果觉得项目不错，或者已经在使用了，希望你可以去 [Github](https://github.com/build-admin/BuildAdmin) 或者 [Gitee](https://gitee.com/wonderful-code/buildadmin) 帮我们点个 ⭐ Star，这将是对我们极大的鼓励与支持。