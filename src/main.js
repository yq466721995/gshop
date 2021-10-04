/*
    入口JS
*/
import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
import store from './store'

import loading from './common/imgs/loading.gif'

import './mock/mockServer'  //加载mockServer即可

//图片懒加载
import VueLazyload from 'vue-lazyload'

import './filters'  //加载过滤器

import {Button} from 'mint-ui'
//注册全局组件
Vue.component(Button.name,Button)

Vue.use(VueLazyload, {  //生成一个自定义指定lazy
  loading
})

new Vue({
    el:'#app',
    render: h => h(App),
    //配置路由器
    router,
    store,  //配置Vuex
})
