import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PH/view/Home.vue'
import Hero from '../views/PH/view/Hero.vue'
import Main from "../views/PH/view/Main";
import Article from "../views/PH/view/Article";
import index from "../views";
// import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
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
