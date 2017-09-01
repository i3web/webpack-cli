# 多页面webpack脚手架

使用webpack可以更好的进行组件化开发，使得项目更好的维护，丰富的webpack插件可以帮助我们合并，编译，压缩文件

该脚手架主要用于后端渲染的建站方式，该脚手架会生成需要的html，css，和js，而不是把所有资源都打包在bundle.js里，脚手架使用chunkhash值命名文件，从而可以放心的使用max-age设置缓存，达到优化网页打开速度的作用

## 使用说明

> 命令行的一些命令说明  
> 开发模式：npm run dev  
> 生产模式：npm run build  

- 所有文件的scss都是通过@import在scss文件中引入，而不借助于js去require，这样有可能引入的scss中使用了其他scss文件中的变量，从而导致编译出错
- 一个页面的入口js（例如pages下的first文件夹下的first.js），只需要去引入组件的js文件，入口的scss去@import组件的scss文件就可以了
- entry入口处设置为数组的形式 app: ['app.js', 'app.scss']，这样就不用再在js中require需要的scss文件了


├─dist # 编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）
├─node_modules # 利用npm管理的所有包及其依赖
├─vendor # 所有不能用npm管理的第三方库
├─.babelrc # babel的配置文件
├─.eslintrc # ESLint的配置文件
├─index.html # 仅作为重定向使用
├─package.json # npm的配置文件
├─webpack-config # 存放分拆后的webpack配置文件
│   ├─base # 主要是存放一些变量
│   ├─inherit # 存放生产环境和开发环境相同的部分，以供继承
│   └─vendor # 存放webpack兼容第三方库所需的配置文件
├─webpack.config.js # webpack配置文件（无实质内容，仅为组织整理）
├─src # 当前项目的源码
    ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
    │  ├─alert # 业务模块
    │  │  └─index # 具体页面
    │  ├─index # 业务模块
    │  │  ├─index # 具体页面
    │  │  └─login # 具体页面
    │  │      └─templates # 如果一个页面的HTML比较复杂，可以分成多块再拼在一起
    │  └─user # 业务模块
    │      ├─edit-password # 具体页面
    │      └─modify-info # 具体页面
    └─public-resource # 各个页面使用到的公共资源
        ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
        │  ├─footer # 页尾
        │  ├─header # 页头
        │  ├─side-menu # 侧边栏
        │  └─top-nav # 顶部菜单
        ├─config # 各种配置文件
        ├─iconfont # iconfont的字体文件
        ├─imgs # 公用的图片资源
        ├─layout # UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路
        │  ├─layout # 具体的布局套路
        │  └─layout-without-nav # 具体的布局套路
        ├─scss # scss文件
        │  ├─base-dir
        │  ├─components-dir # 直接用scss来加载
        │  └─base.less # 组织所有的less文件
        ├─libs # 与业务逻辑无关的库都可以放到这里
        └─logic # 业务逻辑