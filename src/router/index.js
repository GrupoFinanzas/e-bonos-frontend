import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/start' },
  { path: '/login', redirect: '/start/login' },
  { path: '/register', redirect: '/start/register' },
  { path: '/recover', redirect: '/start/recover' },
  {
    path: '/start',
    name: 'start',
    component: () => import('../views/StartView.vue'),
    children: [
      {
        path: '/start/',
        name: 'startOpts',
        component: () => import('../components/start-options.vue')
      },
      {
        path: '/start/login',
        name: 'login',
        component: () => import('../components/login-options.vue')
      },
      {
        path: '/start/register',
        name: 'register',
        component: () => import('../components/register-options.vue')
      },
      {
        path: '/start/recover',
        name: 'recover',
        component: () => import('../components/recover-options.vue')
      }
    ]
  },
  {
    path: '/mybonds',
    name: 'myBonds',
    component: () => import('../views/MyBondsView.vue'),
    children: [
      {
        path: '/mybonds/', redirect: '/mybonds/ '
      },
      {
        path: '/mybonds/ ',
        name: 'myBondsOpts',
        component: () => import('../components/mybonds-options.vue')
      },
      {
        path: '/mybonds/add',
        name: 'addBond',
        component: () => import('../components/new-bond-options.vue')
      },
      {
        path: '/mybonds/edit',
        name: 'editBond',
        component: () => import('../components/edit-bond-options.vue')
      },
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/PageNotFoundView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
