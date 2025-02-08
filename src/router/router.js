import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Introduce from '@/views/Introduce.vue';
import Menu from '@/views/Menu.vue';
import Account from '@/views/Account.vue';
import Payments from '@/views/Payments.vue';
import Sales from '@/views/Sales.vue';
import Contact from '@/views/Contact.vue';
const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { path: '/introduce', name: 'Introduce', component: Introduce },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/account', name: 'Account', component: Account },
  { path: '/payments', name: 'Payments', component: Payments },
  { path: '/sales', name: 'Sales', component: Sales },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
