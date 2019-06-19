// es6编译功能 babel-polyfill
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import fastclick from 'fastclick'

// 引入index.styl样式
import 'common/stylus/index.styl'

// 使整个body页面下没有300ms的延迟
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
