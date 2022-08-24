import { createRouter, createWebHistory, createWebHashHistory, ErrorHandler } from "vue-router";

// 官方文档：https://vue3js.cn/router4/guide/#html
// 引入vue-router对象
/**
 * 定义路由数组
 */
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('../views/components/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/articles/:id',
        name: 'article',
        component: () => import('../views/news/Article.vue'),
        props: true
      }
    ]
  },
  {
    path: '/heroes/:id',
    name : 'hero',
    component : () => import('../views/heros/Hero.vue'),
    props: true
  },
  {// 404路由
    path: '/404',
    name: '404',
    component: ()=>import('/@/views/404.vue')
  },
]

/**
 * 创建路由
 */
const router = createRouter({
  // hash模式：createWebHashHistory，
  // history模式：createWebHistory
  history: createWebHistory("/"),
  // history:createWebHashHistory("/#"),
  routes,
})

/**
 * 路由错误回调
 */
router.onError((handler: ErrorHandler) => {
  console.log("error:", handler);
})

/**
 * 输出对象
 */
export default router