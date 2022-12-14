import Kdu from 'kdu'
import Router from 'kdu-router'
import HelloWorld from '@/components/HelloWorld'

Kdu.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
