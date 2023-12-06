import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import Login from "@/components/Login.vue";
import Forget from "@/components/Forget.vue";
import Register from "@/components/Register.vue";
import HomeView from "@/views/HomeView.vue";
import View1 from "@/views/HomePages/View1.vue";
import View2 from "@/views/HomePages/View2.vue";
import View3 from "@/views/HomePages/View3.vue";
import View01 from "@/views/HomePages/viewMore/View01.vue";
import View02 from "@/views/HomePages/viewMore/View02.vue";
import View03 from "@/views/HomePages/viewMore/View03.vue";


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    children: [
      {
        path: '',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/forget',
        name: 'forget',
        component: Forget
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/view2',
        name:'view2',
        component:View2
      },
      {
        path: '',
        name: 'new',
        component: View1
      },
      {
        path: '/view1',
        name: 'view1',
        component: View1
      },
      {
        path: '/view3',
        name: 'view3',
        component: View3
      },
      {
        path: '/view01',
        name: 'view01',
        component: View01
      },
      {
        path: '/view02',
        name: 'view02',
        component: View02
      },
      {
        path: '/view03',
        name: 'view03',
        component: View03
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
