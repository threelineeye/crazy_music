import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
// 引入index.styl样式
import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
