import Home from '../pages/Home/View.vue'
import Projects from '../pages/Projects/View.vue'
import Resume from '../pages/Resume/View.vue'
import BlankLayout from '../layouts/blank.vue'
import OtherLayout from '../layouts/other.vue'

import { routeName } from './routeName'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: routeName.HOME,
    component: Home,
    meta: { layout: BlankLayout },

  },
  {
    path: '/projects',
    name: routeName.PROJECTS,
    component: Projects,
    meta: { layout: OtherLayout },
  },
  {
    path: '/resume',
    name: routeName.RESUME,
    component: Resume,
    meta: { layout: OtherLayout },
  },
  {
    path: '/posts',
    name: routeName.POSTS,
    component: Projects,
    meta: { layout: OtherLayout },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
