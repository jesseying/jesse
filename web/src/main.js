import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './views/PH/assets/iconfont/iconfont.css'
import './views/PH/scss/style.scss'
import router from './router/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from './views/PH/components/Card.vue'
Vue.component('m-card', Card)

import ListCard from './views/PH/components/ListCard.vue'
Vue.component('m-list-card', ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
