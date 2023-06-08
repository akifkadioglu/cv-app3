import Home from '../pages/Home/View.vue'
import Projects from '../pages/Projects/View.vue'
import Resume from '../pages/Resume/View.vue'
import Blog from '../pages/Blog/View.vue'
import BlogPost from '../pages/BlogPost/View.vue'
import BlankLayout from '../layouts/blank.vue'
import OtherLayout from '../layouts/other.vue'

import { routeName } from './routeName'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
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
    path: '/blog',
    name: routeName.BLOG,
    component: Blog,
    meta: { layout: OtherLayout },
  },
  {
    path: '/blog/:id',
    name: routeName.BLOG_POST,
    component: BlogPost,
    meta: { layout: OtherLayout },
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
