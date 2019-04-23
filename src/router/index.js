import Vue from 'vue'
import Router from 'vue-router'
import HelloElement from '@/components/page/HelloElement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloElement',
      component: HelloElement
    }
  ]
})
