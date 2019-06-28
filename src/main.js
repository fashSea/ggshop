// 入口JS
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共样式
import '../static/css/reset.css'

import './mock/mockServer'  //加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters' //加载过滤器

Vue.config.productionTip = false

//注册全局组件标签
Vue.component(Button.name,Button) // <mt-button>

Vue.use(VueLazyload,{ //内部自定义了一个指令lazy
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,//使用上vue-router
  store  //使用上vuex
})
