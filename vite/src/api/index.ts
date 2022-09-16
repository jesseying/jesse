import axios from 'axios'
const $api = axios.create({
  // baseURL : process.env.VUE_APP_API_URL || '/admin/api',
  baseURL: 'http://localhost:3000/admin/api/'
})

$api.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

$api.interceptors.response.use(res => {
  return res
})

const baseURL = 'http://localhost:3000/admin/api/'

export const getCategories = async (url: string) => {
  const res = await $api.get(baseURL + url)
  if (res.status === 200) {
    return res.data
  } else {
    console.log('请求数据失败!')
  }
}

export default $api
