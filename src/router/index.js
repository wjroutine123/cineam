import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import City from '@/views/City'
import Detail from '@/views/Detail'
// import Center from '@/views/Center'
// import Login from '@/views/Login'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'

Vue.use(VueRouter)// 注册路由模块

const routes = [
  {
    path: '/film',
    component: Film,

    // 嵌套路由
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '/film',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/center',
    component: () => import('@/views/Center') // 懒加载
  },
  {
    path: '/login',
    component: () => import('@/views/Login') // 懒加载
  },

  // 动态路由
  {
    name: 'kerwindetail', // 命名路由
    path: '/detail/:myid', // /detail/**
    component: Detail
  },

  // query 方案
  // {
  //   name: 'kerwindetail', // 命名路由
  //   path: '/detail', // /detail/**
  //   component: Detail
  // },

  // 重定向
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'hash', // hash ,history
  routes
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // ...
//   // console.log('拦截了', to)

//   // next()
//   if (to.fullPath === '/center') {
//     console.log('验证权限')
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       // 跳转登录页面
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
