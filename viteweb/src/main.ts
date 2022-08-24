import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import './views/assets/iconfont/iconfont.css'
import './views/scss/style.scss'
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Card from './views/components/Card.vue'
import ListCard from './views/components/ListCard.vue'
import axios from 'axios'

const app = createApp(App)


app.component('m-list-card', ListCard)
app.use(VueAwesomeSwiper, /* { default global options } */)
app.component('m-card', Card)
app.config.globalProperties.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})
app.use(router)
app.mount('#app')
