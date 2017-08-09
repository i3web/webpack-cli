// 这是一个页面的入口文件,引入css和js

import './index.scss' // css

import '../../component/header/header' // 各个组件的js文件
import '../../component/nav/nav'
import '../../component/side/side'
import '../../component/footer/footer'

if (NODE_ENV === 'production') { // 判断是否是开发环节
  require('./index.ejs')
}

const app = 'abc'
console.log(app)
