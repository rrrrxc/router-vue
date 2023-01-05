import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainView from '@/views/MainView.vue'
import DefaultTab from '@/components/navbar/DefaultTab'
import DataTab from '@/components/navbar/DataTab'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/main/:UserId',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:MainView ,
    props:true,
    children:[
      {
        path:'default',
        component:DefaultTab
      },
      {
        
        path:'data',
        component:DataTab
      },
      {
        path:'',
        redirect:'default'
      }
    ]
  }
]

const router = new VueRouter({
  routes:routesArr
})

const isAuthenticated = sessionStorage.getItem('token')
router.beforeEach((to, from, next) => {
  //next在所有逻辑分支中必须且只能被调用一次
  if (to.fullPath !== '/' && !isAuthenticated) 
   {next('/')}//如果目标路径和当前不相同且未被认证，回到当前页面
  else next()//进入下一界面
})

export default router
