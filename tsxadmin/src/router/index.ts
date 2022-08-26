import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home"),
    children : [
      // News classification
      {
        path: '/categories/create',
        component: () => import('../components/CategoryEdit/CategoryEdit')
      },
      // { path : '/categories/edit/:id', component : CategoryEdit, props: true },
      // { path : '/categories/list', component : CategoryList },
      // Item classification
      {
        path: '/items/create',
        component: () => import('../components/ItemEdit/ItemEdit')
      },
      // { path : '/items/edit/:id', component : ItemEdit, props: true },
      // { path : '/items/list', component : ItemList },
      // Hero classification
      // { path : '/heroes/create', component : HeroEdit },
      // { path : '/heroes/edit/:id', component : HeroEdit, props: true },
      // { path : '/heroes/list', component : HeroList },
      // Article categorization
      // { path : '/articles/create', component : ArticleEdit },
      // { path : '/articles/edit/:id', component : ArticleEdit, props: true },
      // { path : '/articles/list', component : ArticleList },
      // Ad slot classification
      // { path : '/ads/create', component : AdEdit },
      // { path : '/ads/edit/:id', component : AdEdit, props: true },
      // { path : '/ads/list', component : AdList },
      // Administrator classification
      // { path : '/admin_users/create', component : AdminUserEdit },
      // { path : '/admin_users/edit/:id', component : AdminUserEdit, props: true },
      // { path : '/admin_users/list', component : AdminUserList }
    ]
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/About"),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
