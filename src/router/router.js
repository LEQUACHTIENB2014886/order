import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import Overview from '@/views/Overview.vue'
import Menu from '@/views/Menu.vue'
import Account from '@/views/Account.vue'
import Payments from '@/views/Payments.vue'
import Sales from '@/views/Sales.vue'

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { path: '/overview', name: 'Overview', component: Overview },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/account', name: 'Account', component: Account },
  { path: '/payments', name: 'Payments', component: Payments },
  { path: '/sales', name: 'Sales', component: Sales },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = `Trà Sữa Nice | ${to.name}` 
})

export default router
