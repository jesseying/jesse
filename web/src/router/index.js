import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PH/view/Home.vue'
import Hero from '../views/PH/view/Hero.vue'
import Main from "../views/PH/view/Main";
import Article from "../views/PH/view/Article";
import PCindex from "../views/PC/pcindex";
import PHindex from "../views/PH/phindex";
// import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pcindex'
  },
  // PC
  {
    path: '/',
    name: '/pcindex',
    component: PCindex
  },
  // PH
  {
    path: '/phindex',
    name: 'phindex',
    component: PHindex,
    children: [
      {
        path: '/',
        component: Main,
        children: [
          {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/articles/:id',
            name: 'article',
            component: Article,
            props: true
          }
        ]
      },
      {
        path: '/heroes/:id',
        name : 'hero',
        component : Hero,
        props: true
      }
    ]
  },
  
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
