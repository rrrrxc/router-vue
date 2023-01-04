import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainView from '@/views/MainView.vue'
import DefaultTab from '@/components/navbar/DefaultTab'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:MainView ,
    children:[
      {
        path:'default',
        component:DefaultTab
      }
    ]
  }
]

const router = new VueRouter({
  routes:routesArr
})

export default router
