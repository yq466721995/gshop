/*
    路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Miste from '../pages/Miste/Miste.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal'
import Login from "../pages/Login/Login";

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
      {
        path: '/',
        redirect: '/miste'
      },
      {
        path: '/miste',
        component: Miste,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/search',
        component: Search,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/order',
        component: Order,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/personal',
        component: Personal,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/login',
        component: Login
      },
    ]
})
