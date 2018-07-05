import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hua from '@/components/Hua'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index,
      meta: { keepAlive: true } // 缓存组件·
    },
    {
      path: '/hua',
      name: 'Hua',
      component: Hua,
      meta: { keepAlive: true } // 缓存组件·
    }
  ]
})
