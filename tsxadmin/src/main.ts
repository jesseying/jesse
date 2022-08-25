import { createApp } from 'vue'
import App from './App'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MyUi from '@/components/index'

const app = createApp(App)
app.use(store)
app.use(ElementPlus)
app.use(MyUi)
app.use(router).mount('#app')
