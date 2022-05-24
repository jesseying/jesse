import Vue from 'vue'
import axios from 'axios'
import router from './router'
// 将接口封装并导出
const http = axios.create({
	baseURL : process.env.VUE_APP_API_URL || '/admin/api',
	// baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.request.use(function (config) {
	if (localStorage.token) {
		config.headers.Authorization = 'Bearer'+ ' ' + localStorage.token || ''
	}
	return config
}, function (error) {
	return Promise.reject(error)
})

http.interceptors.response.use(res => {
	return res
}, err => {
	if (err.response.data.message) {
		Vue.prototype.$message.error({
			type : 'error',
			message : err.response.data.message
		})
		if (err.response.status === 401) {
			router.push('/login')
		}
	}
	
	return Promise.reject(err)
})

export default http
