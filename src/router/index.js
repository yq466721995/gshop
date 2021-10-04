/*
    路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*import Miste from '../pages/Miste/Miste.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal'*/
//路由懒加载
const Miste = ()=> import('../pages/Miste/Miste.vue')
const Search =()=> import('../pages/Search/Search.vue')
const Order = ()=> import('../pages/Order/Order.vue')
const Personal = ()=> import('../pages/Personal/Personal.vue')

import Login from "../pages/Login/Login"
import Shop from "../pages/Shop/Shop"
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods"
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo"
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings"

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
        component: Miste,   //返回路由组件的函数，只有执行此函数才会加载路由，这个函数在请求对应路由路径时才会执行
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
      {
        path: '/shop',
        component: Shop,
        children:[
          {
            path: '/shop/goods',
            component: ShopGoods
          },
          {
            path: '/shop/ratings',
            component: ShopRatings
          },
          {
            path: '/shop/info',
            component: ShopInfo
          },
          {
            path:'',
            redirect: '/shop/goods'
          }
        ]
      },
    ]
})
