import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/',
    component: Main,
    children:[
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/Setting.vue')
      },
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('../views/Chat.vue')
      },
      {
        path: '/good',
        name: 'Good',
        component: () => import('../views/Good.vue')
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('../views/Help.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
