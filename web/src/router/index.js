import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hero from '../views/heros/Hero.vue'
import Main from "../views/components/Main"
import Article from "../views/news/Article"
import index from "../views";
// import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
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
