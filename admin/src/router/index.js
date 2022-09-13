import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main'
import CategoryEdit from '../views/CategoryEdit'
import CategoryList from '../views/CategoryList'
import ItemEdit from '../views/ItemEdit'
import ItemList from '../views/ItemList'
import HeroEdit from '../views/HeroEdit'
import HeroList from '../views/HeroList'
import ArticleEdit from '../views/ArticleEdit'
import ArticleList from '../views/ArticleList'
import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'
import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { isPublic: true }
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children : [
        // News classification
        { path : '/Categories/create', component : CategoryEdit },
        { path : '/Categories/edit/:id', component : CategoryEdit, props: true },
        { path : '/Categories/list', component : CategoryList },
        // Item classification
        { path : '/items/create', component : ItemEdit },
        { path : '/items/edit/:id', component : ItemEdit, props: true },
        { path : '/items/list', component : ItemList },
        // Hero classification
        { path : '/heroes/create', component : HeroEdit },
        { path : '/heroes/edit/:id', component : HeroEdit, props: true },
        { path : '/heroes/list', component : HeroList },
        // Article categorization
        { path : '/articles/create', component : ArticleEdit },
        { path : '/articles/edit/:id', component : ArticleEdit, props: true },
        { path : '/articles/list', component : ArticleList },
        // Ad slot classification
        { path : '/ads/create', component : AdEdit },
        { path : '/ads/edit/:id', component : AdEdit, props: true },
        { path : '/ads/list', component : AdList },
        // Administrator classification
        { path : '/admin_users/create', component : AdminUserEdit },
        { path : '/admin_users/edit/:id', component : AdminUserEdit, props: true },
        { path : '/admin_users/list', component : AdminUserList }
      ]
    }
  ]
})

router.beforeEach((to, from,next) => {
  if (to.meta.isPublic && 'localStorage'.token) {
    return next('/login')
  }
  next()
})

export default router
