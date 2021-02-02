import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Types from '../views/Types.vue'
import Types_view from '../views/Types_view.vue'
import Partners from '../views/Partners.vue'
import Photos from '../views/Photos.vue'
import Contacts from '../views/Contacts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'types',
        name: 'Types',
        component: Types
      },
      {
        path: 'types/:link',
        name: 'Types/view',
        component: Types_view
      },
      {
        path: 'partners',
        name: 'Partners',
        component: Partners
      },
      {
        path: 'photos',
        name: 'Photos',
        component: Photos
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: Contacts
      },
      {
        path: '*',
        name: 'Error404',
        component: () => import('../views/errors/404.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }

})

export default router
