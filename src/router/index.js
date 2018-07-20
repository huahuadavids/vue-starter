import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hua from '@/components/Hua'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index,
      meta: {keepAlive: true} // 缓存组件·
    },
    {
      path: '/hua',
      name: 'Hua',
      component: Hua,
      meta: {keepAlive: true}, // 缓存组件·
      children: [
        { path: '/index', name: 'userIndex', component: userIndex, meta: {auth: true}},// return /index
        { path: 'index', name: 'userIndex', component: userIndex, meta: {auth: true}}, // return /hua/index
      ]
    }
  ]
})

// 路由切换前
router.beforeEach((to,from,next) => {
  console.log(to)
  next()
})


export default router
