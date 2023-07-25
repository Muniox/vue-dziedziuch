import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ItemPage from '@/views/ItemPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/item/:id',
      name: 'ItemPage',
      component: ItemPage,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default router
