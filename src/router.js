import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import commodity from './components/commodity'
import comment from './components/comment'
import business from './components/business'

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:commodity
    },
    {
      path:'/commodity',
      name:'commodity',
      component:commodity
    },
    {
      path:'/comment',
      name:'comment',
      component:comment
    },
    {
      path:'/business',
      name:'business',
      component:business
    },
  ]
})
